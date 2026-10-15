/**
 * 把 GFM 脚注（`[^1]`）的文案改成中文。
 *
 * 脚注区由 remark-rehype 生成，形如：
 *
 *   <section data-footnotes>
 *     <h2 id="footnote-label" class="sr-only">Footnotes</h2>
 *     ...
 *
 * 这个 h2 在正文里是 sr-only（不可见），但会被收进右侧目录（见
 * @nuxtjs/mdc 的 generateToc），于是目录末尾会出现一条英文的 "Footnotes"。
 *
 * 改 mdast-util-to-hast 的 `footnoteLabel` / `footnoteBackLabel` 选项是没用的：
 * @nuxt/content 解析 markdown 时会把传给 remark-rehype 的 `rehype.options`
 * 整个替换成 `{ handlers: { link } }`，模块里配的 rehype options 到不了解析器。
 * 只有 rehype 插件这条路径会被保留，所以在这里改。
 */

type HastNode = {
  type?: string
  tagName?: string
  value?: string
  properties?: Record<string, unknown>
  children?: HastNode[]
}

export type FootnoteI18nOptions = {
  /** 脚注区的标题，默认 `参考` */
  label?: string
  /** 脚注 `↩` 返回链接的无障碍文案，默认 `返回正文` */
  backLabel?: string
}

export default function footnoteI18n(options: FootnoteI18nOptions = {}) {
  const label = options.label ?? "参考";
  const backLabel = options.backLabel ?? "返回正文";

  function walk(node: HastNode | undefined): void {
    if (!node || typeof node !== "object") {
      return;
    }

    if (node.type === "element" && node.properties) {
      if (node.tagName === "h2" && node.properties.id === "footnote-label") {
        node.children = [{ type: "text", value: label }];
      }
      else if ("dataFootnoteBackref" in node.properties) {
        node.properties.ariaLabel = backLabel;
      }
    }

    if (Array.isArray(node.children)) {
      for (const child of node.children) {
        walk(child);
      }
    }
  }

  return (tree: HastNode) => walk(tree);
}

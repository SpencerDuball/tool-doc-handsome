import { withContentlayer } from "next-contentlayer";
import withMDX from "@next/mdx";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
import rehypeHighlight from "rehype-highlight";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
};

let withMDXWrapper = withMDX({
  extension: /\.mdx?$/,
  options: {
    providerImportSource: "@mdx-js/react",
    remarkPlugins: [remarkFrontmatter, remarkGfm, remarkToc],
    rehypePlugins: [rehypeHighlight],
  },
});

export default withContentlayer(withMDXWrapper(nextConfig));

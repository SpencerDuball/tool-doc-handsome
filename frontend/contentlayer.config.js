import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Overview = defineDocumentType(() => ({
  name: "Overview",
  filePathPattern: "overviews/**/*.mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the overview",
      required: true,
    },
    date: {
      type: "date",
      description: "The date of the overview",
      required: true,
    },
    sortPriority: {
      type: "number",
      description:
        "The sort priority, highest is sorted first, lowest last, 0 is the default.",
      default: 0,
    },
  },
  computedFields: {
    href: {
      type: "string",
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
    rank: {
      type: "number",
      resolve: (doc) => doc._raw.flattenedPath.split("/").length - 1,
    },
    sortPriority: {
      type: "number",
      resolve: (doc) => (doc.sortPriority ? doc.sortPriority : 0),
    },
  },
}));

export const Guide = defineDocumentType(() => ({
  name: "Guide",
  filePathPattern: "guides/**/*.mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the guide",
      required: true,
    },
    date: {
      type: "date",
      description: "The date of the guide",
      required: true,
    },
    sortPriority: {
      type: "number",
      description:
        "The sort priority, highest is sorted first, lowest last, 0 is the default.",
      default: 0,
    },
  },
  computedFields: {
    href: {
      type: "string",
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
    rank: {
      type: "number",
      resolve: (doc) => doc._raw.flattenedPath.split("/").length - 1,
    },
    sortPriority: {
      type: "number",
      resolve: (doc) => (doc.sortPriority ? doc.sortPriority : 0),
    },
  },
}));

export const Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: "docs/**/*.mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the guide",
      required: true,
    },
    date: {
      type: "date",
      description: "The date of the guide",
      required: true,
    },
    sortPriority: {
      type: "number",
      description:
        "The sort priority, highest is sorted first, lowest last, 0 is the default.",
      default: 0,
    },
  },
  computedFields: {
    href: {
      type: "string",
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
    rank: {
      type: "number",
      resolve: (doc) => doc._raw.flattenedPath.split("/").length - 1,
    },
    sortPriority: {
      type: "number",
      resolve: (doc) => (doc.sortPriority ? doc.sortPriority : 0),
    },
  },
}));

export const Tool = defineDocumentType(() => ({
  name: "Tool",
  filePathPattern: "tools/**/*.mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the tool",
      required: true,
    },
    date: {
      type: "date",
      description: "The date of the tool",
      required: true,
    },
    sortPriority: {
      type: "number",
      description:
        "The sort priority, highest is sorted first, lowest last, 0 is the default.",
      default: 0,
    },
  },
  computedFields: {
    href: {
      type: "string",
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
    rank: {
      type: "number",
      resolve: (doc) => doc._raw.flattenedPath.split("/").length - 1,
    },
    sortPriority: {
      type: "number",
      resolve: (doc) => (doc.sortPriority ? doc.sortPriority : 0),
    },
  },
}));

export default makeSource({
  contentDirPath: "pages",
  documentTypes: [Overview, Guide, Doc, Tool],
});

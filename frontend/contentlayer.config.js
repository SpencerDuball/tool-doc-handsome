import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Tool = defineDocumentType(() => ({
  name: "Tool",
  contentType: "mdx",
  filePathPattern: "pages/tools/*.mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true,
    },
  },
}));

export default makeSource({
  contentDirPath: ".",
  contentDirInclude: ["pages/tools"],
  documentTypes: [Tool],
});

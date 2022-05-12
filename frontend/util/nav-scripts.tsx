import { DocumentTypes } from "contentlayer/generated";

export interface IFolderDocument {
  _id: string;
}

export interface IStructureElement {
  page: DocumentTypes | IFolderDocument;
  rank: number;
  sortPriority: number;
  title: string;
  children: IStructureElement[];
}

export const isDocumentTypes = (
  item: IFolderDocument | DocumentTypes
): item is DocumentTypes => {
  return "href" in item;
};

function getFolderTitleFromId(href: string) {
  let rawName = href.split("/").pop()!.replace(/[-_]/g, " ");

  // capitalize each new word
  const title = rawName
    .split(" ")
    .map((part) => part.slice(0, 1).toUpperCase() + part.slice(1))
    .join(" ");

  return title;
}

export function getFolderStructure(pages: DocumentTypes[], rank: number) {
  // (1) get all page IDs of the rank
  const pagesIds = pages
    .filter((page) => page.rank === rank)
    .map((document) => document.href);

  // (2) get all folders that aren't represented by a page
  // (for instance, if there is no "index" page for the folder)
  const folderIds = Array.from(
    new Set(
      pages
        .filter((page) => page.rank === rank + 1)
        .map(({ _raw }) => `/${_raw.sourceFileDir}`)
    )
  ).filter((folder) => !pagesIds.includes(folder));

  // (3) sort pages into those of current rank and not
  const pagesOfCurrentRank = pages.filter((page) => page.rank === rank);
  const pagesNotOfCurrentRank = pages.filter((page) => page.rank !== rank);

  // (4) create the StructureElements for all pages & folders
  const pageElements: IStructureElement[] = pagesOfCurrentRank.map((page) => {
    const children = pagesNotOfCurrentRank.filter(({ _raw }) => {
      const startExact = new RegExp(`${page.href}(?![\\w\\d\\s-_])(\/.*)?`);
      return `/${_raw.sourceFileDir}`.match(startExact);
    });

    const { rank, sortPriority, title } = page;
    return {
      page,
      rank,
      sortPriority,
      title,
      children:
        children.length > 0 ? getFolderStructure(children, rank + 1) : [],
    };
  });
  const folderElements: IStructureElement[] = folderIds.map((folderId) => {
    const children = pagesNotOfCurrentRank.filter(({ _raw }) => {
      const startExact = new RegExp(`${folderId}(?![\\w\\d\\s-_])(\/.*)?`);
      return `/${_raw.sourceFileDir}`.match(startExact);
    });

    return {
      page: { _id: folderId },
      rank,
      sortPriority: 0,
      title: getFolderTitleFromId(folderId),
      children:
        children.length > 0 ? getFolderStructure(children, rank + 1) : [],
    };
  });

  // (5) return the elements in sorted order
  return [...pageElements, ...folderElements].sort(
    (prev, next) => next.sortPriority - prev.sortPriority
  );
}

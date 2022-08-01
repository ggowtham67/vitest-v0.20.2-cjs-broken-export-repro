import type * as cheerio from "cheerio";

// Mutates the dom
export const addLoadingAttrToImages = (elements: cheerio.Element[]) => {
  elements.forEach((element) => {
    if (element.tagName.toLowerCase() !== "img") {
      return;
    }

    element.attribs.loading = "lazy";
  });
};

import { Book } from "@/types";

const convertHTTPToHTTPS = (url: string | undefined) => {
  return url?.replace(/http/g, "https") || undefined;
};

// taking in an array of {category: 'foo', ...}
// finds all categories and return them as an array

const getAllCatagories = (booksArr: Book[]) => {
  const categories: string[] = [];
  for (var book of booksArr) {
    const firstCat = book.categories[0];
    if (!categories.includes(firstCat)) categories.push(firstCat);
  }

  return categories;
};

// removes all spaces and special characters from a string

const normaliseString = (string: string) => {
  if (typeof string !== "string") return "";
  return string.toLowerCase().replace(/[^a-z]/gi, "");
};

export { convertHTTPToHTTPS, getAllCatagories, normaliseString };

export * from './sortMenuItems'

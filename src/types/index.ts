// book types

export type Book = {
  id: string,
  title: string;
  authors: Array<string>;
  authorInfo: string;
  images: {
    smallThumbnail: string;
    thumbnail: string;
  } | null;
  catagories: Array<string>;
  description: string;
};

export type BooksListProps = {
  books: Array<Book>;
};

// google api

export type GoogleAPIBook = {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: Object;
  saleInfo: Object;
  accessInfo: Object;
  searchInfo: Object;
};

export type GoogleBooksAPIRes = {
  items: Array<GoogleAPIBook>;
};

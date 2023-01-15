// book types 

export type Book = {
  title: string,
  author: string,
  authorInfo: string,
  thumbnail: string,
  catagories: Array<string>
};

export type BooksListProps = {
  books: Array<Book>;
};
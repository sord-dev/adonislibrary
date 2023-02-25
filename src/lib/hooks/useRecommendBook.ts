import { Book } from "@/types";
import { useEffect, useState } from "react";

// given a list of objects with the properties { title, author, catagory... } and a focus object from the list
// return a list of objects that have the same author and catagory

export function useRecommendBook(selectedBook: Book, bookArr: Array<Book>): Book[] {
  const [recommended, setRecommended] = useState<Book[]>([]);

  useEffect(() => {
    if (selectedBook) {
      // filter an array and compare the book authors and catagories to see if they should be returned
      const newArr = bookArr.filter((book) => {
        const selectedBookTitle = selectedBook.title.toLowerCase();
        const currBookTitle = book.title.toLowerCase();
        const selectedBookAuthor = selectedBook.authors[0].toLowerCase();
        const currBookAuthor = book.authors[0].toLowerCase();
        const selectedBookCat = selectedBook.categories[0].toLowerCase();
        const currBookCat = book.categories[0].toLowerCase();

        // if it's not the same book (they don't have the same title), preform the checks needed.
        if (selectedBookTitle !== currBookTitle) {
          return (
            selectedBookAuthor === currBookAuthor ||
            selectedBookCat === currBookCat
          );
        }
      });
      setRecommended(newArr);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedBook]);
  return recommended;
}

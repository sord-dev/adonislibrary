import { ModalContext } from "@/lib/contexts/ModalContext";
import { Book } from "@/types";
import React, { useContext } from "react";
import styles from "./style.module.css";

export function BooksList({ books }: any) {
  return (
    <div className={styles.booksList}>
      {books?.map((book: Book) => (
        <Book key={book.title} {...book} />
      ))}
    </div>
  );
}

function Book(book: Book) {
  const { setSelectedBook } = useContext(ModalContext);

  return (
    <div className={styles.book} onClick={() => setSelectedBook(book)}>
      <img src={book.thumbnail} alt={`${book.title} book cover image`} />
      <p>{book.title}</p>
      <span>{book.author}</span>
    </div>
  );
}

// catagory list
/* <div className={styles.catList}>
      {catagories?.map((cat) => (
        <div key={cat}>{cat}</div>
      ))}
  </div> */

import { convertHTTPToHTTPS } from "@/lib";
import { ModalContext } from "@/lib/contexts/ModalContext";
import { Book } from "@/types";
import React, { useContext } from "react";
import styles from "./style.module.css";

export function BooksList({ books }: any) {
  return (
    <div className={styles.booksList}>
      {books?.map((book: Book) => (
        <Book key={book.id} {...book} />
      ))}
      {!books.length && <div className={styles.error}>Sorry, no results.</div>}
    </div>
  );
}

function Book(book: Book) {
  const { setSelectedBook } = useContext(ModalContext);

  return (
    <div className={styles.book} onClick={() => setSelectedBook(book)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={convertHTTPToHTTPS(book.images?.thumbnail)}
        alt={`${book.title} book cover image`}
      />
      <p>{book.title}</p>
      <span>{book.authors[0]}</span>
    </div>
  );
}

// catagory list

import React from "react";
import { Book } from "../Book";
import styles from "./style.module.css";

export function BookList({ books }: any) {
  return (
    <div className={styles.bookList}>
      {books.map((book: any) => {
        return <Book key={book.id} {...book} />;
      })}

      {!books.length && <SearchError />}
    </div>
  );
}

function SearchError() {
  return <div className={styles.error}>Sorry, no results.</div>;
}

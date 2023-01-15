import { Book, BooksListProps } from "@/types";
import React from "react";
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

function Book({ title, catagories, thumbnail, author }: Book) {
  return (
    <div className={styles.book}>
      <img src={thumbnail} alt={`${title} book cover image`} />
      <p>{title}</p>
      <span>{author}</span>
      {/* <div className={styles.catList}>
        {catagories?.map((cat) => (
          <div key={cat}>{cat}</div>
        ))}
      </div> */}
    </div>
  );
}

import { getAllCatagories, normaliseString, sortMenuItems } from "@/lib";
import React, { useMemo } from "react";
import styles from "./style.module.css";
import { Book } from "../Book";

export function Menu({ books }: any) {
  const categories = useMemo(() => getAllCatagories(books), [books]);
  const { menuData, sortedCategories } = useMemo(
    () => sortMenuItems(books, categories),
    [books, categories]
  );

  return (
    <div className={styles.menu}>
      {sortedCategories?.map((category: string) => {
        const normalisedCat = normaliseString(category);
        const books = menuData[normalisedCat];

        return (
          <div key={normalisedCat} className={styles.category}>
            <h3>{category}</h3>
            <div className={styles.bookList}>
              <BookList books={books} />
            </div>
          </div>
        );
      })}

      {!books.length && <SearchError />}
    </div>
  );
}

function BookList({ books }: any) {
  return (
    <>
      {books.map((book: any) => {
        return <Book key={book.id} {...book} />;
      })}
    </>
  );
}

function SearchError() {
  return <div className={styles.error}>Sorry, no results.</div>;
}

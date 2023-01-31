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
              <MenuBookList books={books} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

function MenuBookList({ books }: any) {
  return (
    <>
      {books.map((book: any) => {
        return <Book key={book.id} {...book} />;
      })}
    </>
  );
}
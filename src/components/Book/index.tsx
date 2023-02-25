import { convertHTTPToHTTPS } from "@/lib";
import { ModalContext } from "@/lib/contexts/ModalContext";
import { Book } from "@/types";
import Image from "next/image";
import React, { useContext } from "react";
import styles from "./style.module.css";

export function Book(book: Book) {
  const { setSelectedBook } = useContext(ModalContext);

  const imgSrc =
    convertHTTPToHTTPS(book.images?.thumbnail) ||
    "https://placeholder.com/assets/images/150";

  return (
    <div className={styles.book} onClick={() => setSelectedBook(book)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <Image
        width={180}
        height={280}
        src={imgSrc}
        alt={`${book.title} book cover image`}
        loading={"lazy"}
        draggable={false}
      />
      <p>{book.title}</p>
      <span>{book.authors[0]}</span>
    </div>
  );
}

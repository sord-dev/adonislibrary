import React, { useContext } from "react";
import styles from "./style.module.css";
import { Book } from "@/types";
import Image from "next/image";
import { ModalContext } from "@/lib/contexts/ModalContext";

export function Carousel({ books }: any) {
  const { setSelectedBook } = useContext(ModalContext);
  if (!books.length) return <CarouselError />;

  return (
    <div className={styles.carousel}>
      {books.map((book: Book) => (
        <div
          key={book.id}
          className={styles.carouselImage}
          onClick={() => setSelectedBook(book)}
        >
          <Image
            src={book.images?.smallThumbnail || ""}
            alt={book.title}
            fill
          />
        </div>
      ))}
    </div>
  );
}

function CarouselError() {
  return <div className={styles.error}>Err, no books detected</div>;
}

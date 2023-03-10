import { convertHTTPToHTTPS } from "@/lib";
import { useRecommendBook } from "@/lib/hooks/useRecommendBook";
import { Book, ModalProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./style.module.css";
import { Carousel } from "../Carousel";

export function Modal({ selectedBook, closeModal, books }: ModalProps) {
  const recommended = useRecommendBook(selectedBook, books);

  return (
    <div className={styles.modalTint} onClick={() => closeModal()}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <ModalHeader {...selectedBook} />

        <div className={styles.modalContent}>
          <div className={styles.modalDescription}>
            <h4>Description</h4>
            <p>{selectedBook.description}</p>
          </div>
          {recommended.length > 0 && (
            <div className={styles.recommendedBooks}>
              <h4>You Might Like</h4>
              <div>
               
                <Carousel books={recommended} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ModalHeader(selectedBook: Book) {
  const imgSrc =
    convertHTTPToHTTPS(selectedBook.images?.thumbnail) ||
    "https://placeholder.com/assets/images/150";

  return (
    <div className={styles.modalHeader}>
      <div className={styles.modalThumbnail}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <Image
          height={72}
          width={112}
          src={imgSrc}
          draggable={false}
          alt={`${selectedBook.title}, ${selectedBook.description}`}
          loading={"lazy"}
        />
      </div>

      <div className={styles.metadata}>
        <span className={styles.author}>{selectedBook.authors[0]}</span>
        <h3>{selectedBook.title}</h3>
        {/* make into a component and map through all catagories if there are multiple */}
        <div className={styles.categoryList}>
          <div className={styles.catagoryItem}>
            {selectedBook?.categories[0]}
          </div>
        </div>

        <ModalButtons {...{ infoLink: selectedBook.infoLink }} />
      </div>
    </div>
  );
}

function ModalButtons({ infoLink }: any) {
  return (
    <div className={styles.modalButtons}>
      <Link href={infoLink} target="_blank" rel="noopener noreferrer">
        <button className={styles.primary}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/ShoppingCart.svg" alt="shopping cart svg image" />
          Buy Now
        </button>
      </Link>
      <Link href={infoLink} target="_blank" rel="noopener noreferrer">
        <button className={styles.secondary}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/QuestionMark.svg" alt="question mark svg image" />
          More Info
        </button>
      </Link>
    </div>
  );
}

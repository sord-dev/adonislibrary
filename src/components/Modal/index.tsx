import { convertHTTPToHTTPS } from "@/lib";
import { Book } from "@/types";
import Link from "next/link";
import React from "react";
import styles from "./style.module.css";

type ModalProps = {
  selectedBook: Book;
  closeModal: Function;
};

export function Modal({ selectedBook, closeModal }: ModalProps) {
  return (
    <div className={styles.modalTint} onClick={() => closeModal()}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <ModalHeader {...selectedBook}>
          {/* NOTE EXIT BUTTON NOT WORKING, CAN STILL EXIT FROM OOB CLICK */}
          {/* <button onClick={() => closeModal()}>X</button> */}
        </ModalHeader>

        <div className={styles.modalContent}>
          <div className={styles.modalDescription}>
            <h4>Description</h4>
            <p>{selectedBook.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ModalHeader(selectedBook: Book, { children }: any) {
  return (
    <div className={styles.modalHeader}>
      <div className={styles.modalThumbnail}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={convertHTTPToHTTPS(selectedBook.images?.smallThumbnail)}
          alt={`${selectedBook.title}, ${selectedBook.description}`}
        />
      </div>

      <div className={styles.metadata}>
        <span className={styles.author}>{selectedBook.authors[0]}</span>
        <h3>{selectedBook.title}</h3>
        <div className={styles.catagoryList}></div>

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

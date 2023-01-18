import { IdExtractYtURL } from "@/lib";
import { Book } from "@/types";
import Link from "next/link";
import React from "react";
import styles from "./style.module.css";

type ModalProps = {
  selectedBook: Book,
  closeModal: Function,
}

export function Modal({ selectedBook, closeModal }: ModalProps) {
  return (
    <div className={styles.modalTint} onClick={() => closeModal()}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <div className={styles.title}>
            <div className={styles.modalThumbnail}>
              <img src={selectedBook.thumbnail} />
            </div>

            <div className={styles.metadata}>
              <span className={styles.author}>{selectedBook.author}</span>
              <h3>{selectedBook.title}</h3>
              <div className={styles.catagoryList}>
                {selectedBook.catagories.map((cat) => (
                  <span key={`${cat}-id`}>{cat}</span>
                ))}
              </div>

              <div className={styles.modalButtons}>
                <Link href={"/#"}>
                  <button className={styles.primary}>
                    {" "}
                    <img
                      src="/ShoppingCart.svg"
                      alt="shopping cart svg image"
                    />{" "}
                    Buy Now
                  </button>
                </Link>
                <Link href={"/#"}>
                  <button className={styles.secondary}>
                    {" "}
                    <img
                      src="/QuestionMark.svg"
                      alt="question mark svg image"
                    />{" "}
                    More Info
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <button onClick={() => closeModal()}>x</button>
        </div>

        <div className={styles.modalContent}>
          <div className={styles.modalVideo}>
            <iframe
              src={`https://www.youtube.com/embed/${IdExtractYtURL(
                selectedBook.authorInfo
              )}`}
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
          </div>

          <div className={styles.modalDescription}>
            <h4>Description</h4>
            <p>{selectedBook.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

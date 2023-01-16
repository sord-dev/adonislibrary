import React from "react";
import styles from "./style.module.css";

export function Modal({ selectedBook, closeModal }: any) {
  return (
    <div className={styles.modalTint} onClick={() => closeModal()}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h3>Header</h3>
          <button onClick={() => closeModal()}>x</button>
        </div>
        <div className={styles.modalContent}>{selectedBook.title}</div>
      </div>
    </div>
  );
}

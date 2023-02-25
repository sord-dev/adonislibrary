import { Book } from "@/types";
import React, { createContext, useEffect, useState } from "react";

type ModalContextState = {
  selectedBook: Book | null;
  setSelectedBook: Function;
  modalActive: Boolean;
  setModalActive: Function;
  closeModal: Function;
};

const defaultState = {
  selectedBook: null,
  setSelectedBook: () => {},
  modalActive: false,
  setModalActive: () => {},
  closeModal: () => {},
};

export const ModalContext = createContext<ModalContextState>(defaultState);

export function ModalContextProvider({ children }: any) {
  const [selectedBook, setSelectedBook] = useState(null);
  const [modalActive, setModalActive] = useState(false);

  const closeModal = () => {
    setModalActive(false);
    setSelectedBook(null);
  };

  useEffect(() => {
    selectedBook ? setModalActive(true) : setModalActive(false);
  }, [selectedBook]);

  useEffect(() => {
    selectedBook
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [selectedBook]);

  return (
    <ModalContext.Provider
      value={{ selectedBook, setSelectedBook, modalActive, closeModal }}
    >
      {children}
    </ModalContext.Provider>
  );
}

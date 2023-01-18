import React, { createContext, useEffect, useState } from "react";

export const ModalContext = createContext<any>({});

export function ModalContextProvider({ children }: any) {
  const [selectedBook, setSelectedBook] = useState(null);
  const [modalActive, setModalActive] = useState(false);

  const closeModal = () => {
    setModalActive(false);
    setSelectedBook(null);
  };

  useEffect(() => {
    if (selectedBook) {
      setModalActive(true);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedBook, modalActive]);

  return (
    <ModalContext.Provider
      value={{ selectedBook, setSelectedBook, modalActive, closeModal }}
    >
      {children}
    </ModalContext.Provider>
  );
}

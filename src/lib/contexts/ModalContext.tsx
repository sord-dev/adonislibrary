import React, { createContext, useEffect, useState } from "react";

export const ModalContext = createContext<any>({});

export function ModalContextProvider({ children }: any) {
  const [selectedBook, setSelectedBook] = useState(null);
  const [modalActive, setModalActive] = useState(false);

  const closeModal = () => {
    setModalActive(false)
    setSelectedBook(null)
  }

  useEffect(() => {
    console.log(selectedBook, modalActive);
    if (selectedBook) setModalActive(true);
  }, [selectedBook, modalActive]);

  return (
    <ModalContext.Provider
      value={{ selectedBook, setSelectedBook, modalActive, closeModal }}
    >
      {children}
    </ModalContext.Provider>
  );
}

import React, { createContext, useState } from "react";

const ModalContext = createContext({});

export function ModalContextProvider(props: any) {
  const [selectedBook, useSelectedBook] = useState({});

  return <ModalContext.Provider value={{ selectedBook, useSelectedBook }} >ModalContext</ModalContext.Provider>;
}

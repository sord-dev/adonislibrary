import React, { createContext, useEffect, useState } from "react";

export const ModalContext = createContext<any>({});

export function ModalContextProvider({ children }: any) {
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    console.log(selectedBook);
  }, [selectedBook]);

  return (
    <ModalContext.Provider value={{ selectedBook, setSelectedBook }}>
      {children}
    </ModalContext.Provider>
  );
}

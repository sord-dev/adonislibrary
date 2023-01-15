import { Book } from "@/types";
import React, { useEffect, useState } from "react";

function useSearch(books: Array<string>) {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(books);

  useEffect(() => {
    if (query === "" && result.length === 0) setResult(books);
    if (query === "") return;
    setResult(
      books.filter((book: any) => {
        const title = book.title.toLowerCase();
        return title.includes(query);
      })
    );
  }, [query]);

  return { query, setQuery, result };
}

export default useSearch;

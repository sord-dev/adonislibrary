import { Book } from "@/types";
import { useEffect, useState } from "react";
import { useDebounceedValue } from "./useDebonceValue";

function useSearch(books: Array<Book>) {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(books);
  const [searching, setSearching] = useState(false);
  const debouncedQuery = useDebounceedValue(query);

  useEffect(() => {
    if (debouncedQuery === "") setResult(books);

    setResult(
      books.filter((book: Book) => {
        const title = book.title.toLowerCase();
        const name = book.authors[0].toLowerCase();
        const category = book.categories[0].toLowerCase();

        return (
          title.includes(debouncedQuery.toLowerCase()) ||
          name.includes(debouncedQuery.toLowerCase()) ||
          category.includes(debouncedQuery.toLowerCase())
        );
      })
    );

    if(debouncedQuery !== '') {
      setSearching(true);
    }

    return () => {
      setSearching(false)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedQuery]);

  return { query, setQuery, result, searching };
}

export default useSearch;

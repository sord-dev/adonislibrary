import { useEffect, useState } from "react";
import { useDebounceedValue } from "./useDebonceValue";

function useSearch(books: Array<string>) {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(books);
  const debouncedQuery = useDebounceedValue(query);

  useEffect(() => {
    if (debouncedQuery === "") setResult(books);

    setResult(
      books.filter((book: any) => {
        const title = book.title.toLowerCase();
        const name = book.authors[0].toLowerCase();

        return (
          title.includes(debouncedQuery.toLowerCase()) ||
          name.includes(debouncedQuery.toLowerCase())
        );
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedQuery]);

  return { query, setQuery, result };
}

export default useSearch;

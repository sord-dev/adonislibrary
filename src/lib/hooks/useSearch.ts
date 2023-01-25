import { useEffect, useState } from "react";

function useSearch(books: Array<string>) {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(books);

  useEffect(() => {
    if (query === "") setResult(books);

    setResult(
      books.filter((book: any) => {
        const title = book.title.toLowerCase();
        return title.includes(query.toLowerCase());
      })
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return { query, setQuery, result };
}

export default useSearch;

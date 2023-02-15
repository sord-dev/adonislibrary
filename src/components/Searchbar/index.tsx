import { SearchBarProps } from "@/types";
import React from "react";
import styles from "./style.module.css";

export function SearchBar({ query, setQuery, result }: SearchBarProps) {
  const isSearching = Boolean(query && result);
  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.searchbar}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={"Search Books..."}
      />

      {isSearching && <PredictComponent {...{ result }} />}
    </div>
  );
}

function PredictComponent({ result = [] }: any) {
  // get all titles from the results and add them here brav
  const titles = result
    .map((item: any, i: number) => {
      if (i < 5)
        return {
          title: item.title,
          author: item.authors[0],
          category: item.categories[0],
        };
    })
    .filter((title: any) => title);

  console.log(titles);
  return (
    <div className={styles.predict}>
      {titles.map(
        (result: { title: string; author: string; category: string }) => (
          <div key={result.title} onClick={() => console.log(`setActiveCard === ${result.title}`)}>
            <p>{result.title}</p>
            <p>{result.author}</p>
            <p>{result.category}</p>
          </div>
        )
      )}
    </div>
  );
}

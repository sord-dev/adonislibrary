import Link from "next/link";
import React from "react";
import styles from "./style.module.css";

type SearchBarProps = {
  query: string;
  setQuery: Function;
};

export function SearchBar({ query, setQuery }: SearchBarProps) {
  return (
    <input
      className={styles.searchbar}
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder={"Search Books..."}
    />
  );
}

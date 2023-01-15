import styles from "@/styles/Home.module.css";
import { SEO, BooksList, SearchBar } from "@/components";
import data from "../data.json";
import { BooksListProps, Book } from "@/types";
import { useEffect, useState } from "react";
import useSearch from "@/lib/hooks/useSearch";

type HomePageProps = {
  books: BooksListProps;
  catagories: Array<string>;
};

export default function Home({ books, catagories }: any) {
  const { query, setQuery, result } = useSearch(books);

  return (
    <>
      <SEO
        {...{
          title: "High Value Books 💸",
          description:
            "A collation of Hamza, Iman and Hormozi's recommendations of books.",
        }}
      />
      <main className={"container"}>
        <h1>Wisdom locked behind pages is unlocked only once acted upon.</h1>
        <p>Approx {books.length} books here to obsess over for a while, go ahead and search...</p>
        <SearchBar {...{ query, setQuery }} />

        <BooksList books={result} />
      </main>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      books: data.books,
      catagories: data.catagories,
    },
  };
}

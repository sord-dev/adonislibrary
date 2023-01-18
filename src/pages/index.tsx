import { useContext } from "react";

import useSearch from "@/lib/hooks/useSearch";
import { BooksListProps } from "@/types";
import { SEO, BooksList, SearchBar, Modal } from "@/components";
import { ModalContext } from "@/lib/contexts/ModalContext";
import styles from "@/styles/Home.module.css";
import data from "../data.json";

type HomePageProps = {
  books: BooksListProps;
};

export default function Home({ books }: any) {
  const { query, setQuery, result } = useSearch(books);
  const { selectedBook, modalActive, closeModal } =
    useContext(ModalContext);

  return (
    <>
      <SEO
        {...{
          title: "High Value Books 💸",
          description:
            "A collation of Hamza, Iman and Hormozi's recommendations of books.",
        }}
      />

      {modalActive && <Modal {...{ closeModal, selectedBook }} />}

      <main>
        
        <div className={styles.searchBarContainer}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/search-scene-min.png" alt="searchbar scene" />
          <div className={`container ${styles.searchBarContent}`}>
            <h1>
              Wisdom locked behind pages is unlocked only once acted upon.
            </h1>
            <p>
              Approx {books.length} books here to learn from, go ahead and
              search...
            </p>
            <SearchBar {...{ query, setQuery }} />
          </div>
        </div>

        <div className={"container"}>
          <BooksList books={result} />
        </div>

      </main>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { books: data.books },
  };
}

import { useContext } from "react";

import useSearch from "@/lib/hooks/useSearch";
import { BooksListProps } from "@/types";
import { SEO, BooksList, SearchBar, Modal } from "@/components";
import { ModalContext } from "@/lib/contexts/ModalContext";
import styles from "@/styles/Home.module.css";
import { GoogleBooksAPIProvider } from "@/lib/apis/googleBooks";

type HomePageProps = {
  books: BooksListProps;
};

export default function Home({ books }: any) {
  const { query, setQuery, result } = useSearch(books);
  const { selectedBook, modalActive, closeModal } = useContext(ModalContext);

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

export async function getServerSideProps() {
  // use google books api to get a list of books from your google books bookshelf
  // NOTE this should be done on the back end on a timeout every few days
  // the data should be populated in a database because it doesn't change much
  const response = await GoogleBooksAPIProvider.getBookShelf("109350090333415106090","1001");
  return {
    props: { books: response },
  };
}

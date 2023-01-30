import { useContext } from "react";
import { ModalContext } from "@/lib/contexts/ModalContext";
import { SEO, BooksList, SearchBar, Modal } from "@/components";
import useSearch from "@/lib/hooks/useSearch";
import { GoogleBooksAPIProvider } from "@/lib/apis/googleBooks";
import styles from "@/styles/Home.module.css";

export default function Home({ books }: any) {
  const { query, setQuery, result } = useSearch(books);
  const { selectedBook, modalActive, closeModal } = useContext(ModalContext);

  return (
    <>
      <SEO
        {...{
          title: "High Value Books 💸",
          description: "Books worth buying.",
        }}
      />

      {modalActive && <Modal {...{ closeModal, selectedBook, books }} />}

      <main>
        <div className={styles.searchBarContainer}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://i.postimg.cc/dQxJMxcw/search-scene-min.png" alt="searchbar scene" />
          <div className={`container ${styles.searchBarContent}`}>
            <h1>
              Wisdom locked behind pages is unlocked <br /> only once acted
              upon.
            </h1>
            <p>
              PS these books are catagoriesed via topic, <br /> therefore if
              you&apos;d like a specific type of book, click the catagories.
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
  // use google books api to get a list of books from your google books bookshelf DONE
  // NOTE THIS should be done on the back end on a timeout every few days
  // the data should be populated in a database because it doesn't change much
  const response = await GoogleBooksAPIProvider.getBookShelf(
    "109350090333415106090",
    "1001"
  );

  return {
    props: { books: response },
  };
}

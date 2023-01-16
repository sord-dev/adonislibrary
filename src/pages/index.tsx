import styles from "@/styles/Home.module.css";
import { SEO, BooksList, SearchBar, Modal } from "@/components";
import { BooksListProps, Book } from "@/types";
import useSearch from "@/lib/hooks/useSearch";
import { useContext } from "react";
import { ModalContext } from "@/lib/contexts/ModalContext";
import data from "../data.json";

type HomePageProps = {
  books: BooksListProps;
  catagories: Array<string>;
};

export default function Home({ books, catagories }: any) {
  const { query, setQuery, result } = useSearch(books);
  const { selectedBook, setSelectedBook, modalActive, closeModal } =
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
          <img src="/search-scene-min.png" alt="" />
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
    props: {
      books: data.books,
      catagories: data.catagories,
    },
  };
}

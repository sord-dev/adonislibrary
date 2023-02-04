import { useContext } from "react";
import { ModalContext } from "@/lib/contexts/ModalContext";
import useSearch from "@/lib/hooks/useSearch";
import { GoogleBooksAPIProvider } from "@/lib/apis/googleBooks";
import styles from "@/styles/Home.module.css";
import { SEO, SearchBar, Modal, Menu, BookList } from "@/components";
import Image from "next/image";

export default function Home({ books }: any) {
  const { query, setQuery, result, searching } = useSearch(books);
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
          <Image
            fill
            src="https://i.postimg.cc/dQxJMxcw/search-scene-min.png"
            alt="searchbar scene"
            draggable={false}
            loading={"eager"}
          />
          <div className={`container ${styles.searchBarContent}`}>
            <h2>
              Wisdom locked behind pages is unlocked <br /> only once acted
              upon.
            </h2>
            <p>
              PS these books are catagoriesed via topic, <br /> therefore if
              you&apos;d like a specific type of book, click the catagories.
            </p>
            <SearchBar {...{ query, setQuery }} />
          </div>
        </div>

        <div className={"container"}>
          {!searching && <Menu books={books} />}
          {searching && <BookList books={result} />}
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

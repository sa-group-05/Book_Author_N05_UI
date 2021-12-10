import BookList from "../components/Books/BookList";
import React, { useEffect } from "react";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getAllBooks } from "../lib/api";
import NoBooksFound from "../components/Books/NoBooksFound";
import { URL } from "../constants/Config";
import HomeListBook from "../components/Home/HomeListBook";
const HomeBook = () => {
  const {
    sendRequest,
    status,
    data: loadedBook,
    error,
  } = useHttp(getAllBooks, true);
  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  if (error) {
    return <p className="centered focused">{error}</p>;
  }
  if (status === "completed" && (!loadedBook || loadedBook.length === 0)) {
    return <NoBooksFound />;
  }

  console.log(loadedBook);
  return <HomeListBook books={loadedBook} />;
};

export default HomeBook;

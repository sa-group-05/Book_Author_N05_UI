import BookList from "../components/Books/BookList";
import React, { useEffect } from "react";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getAllBooks } from "../lib/api";
import NoBooksFound from "../components/Books/NoBooksFound";
import { URL } from "../constants/Config";
const AllBooks = () => {
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
  fetch(`${URL}/books`)
    .then((res) => res.json())
    .then((data) => console.log(data));
  return <BookList books={loadedBook} />;
};

export default AllBooks;

import React, { Fragment, useEffect } from "react";
import { useParams } from "react-router";
import HighlightedBook from "../components/Books/HighlightedBook";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleBook } from "../lib/api";

const BookDetail = () => {
  const params = useParams();
  const { bookId } = params;
  console.log("Params: ", bookId);
  const {
    sendRequest,
    status,
    data: loadedBook,
    error,
  } = useHttp(getSingleBook, true);
  useEffect(() => {
    sendRequest(bookId);
  }, [sendRequest, bookId]);
  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  if (error) {
    return <p className="centered">{error}</p>;
  }
  if (!loadedBook.title) {
    return <p className="centered">No book found!</p>;
  }
  return (
    <Fragment>
      <HighlightedBook
        key={loadedBook.id}
        id={loadedBook.id}
        price={loadedBook.price}
        title={loadedBook.title}
        imageUrl={loadedBook.imageUrl}
        publishedYear={loadedBook.publishedYear}
      />
    </Fragment>
  );
};

export default BookDetail;

import React, { Fragment } from "react";
import { useParams } from "react-router";

import HighlightedBook from "../components/Books/HighlightedBook";
const DUMMY_BOOKS = [
  {
    id: "1",
    imageUrl: "https://ibb.co/k1wyR6m",
    title: "The adventure",
    authorId: 2,
    price: 32000.0,
    publishedYear: 2021,
  },
  {
    id: "2",
    imageUrl: "https://ibb.co/k1wyR6m",
    title: "The zunggzing",
    authorId: 4,
    price: 32000.0,
    publishedYear: 2021,
  },
];
const BookDetail = () => {
  const params = useParams();
  console.log(params);
  const book = DUMMY_BOOKS.find((book) => book.id === params.bookId);
  if (!book) {
    return <p>No book found!</p>;
  }
  return (
    <Fragment>
      <HighlightedBook title={book.title} price={book.price} />
    </Fragment>
  );
};

export default BookDetail;

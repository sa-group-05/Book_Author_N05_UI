import React from "react";
import BookList from "../components/Books/BookList";
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
const AllBooks = () => {
  return <BookList books={DUMMY_BOOKS} />;
};

export default AllBooks;

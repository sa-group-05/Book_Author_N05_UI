import React from "react";
import BookForm from "../components/Books/BookForm";
import { useHistory } from "react-router";

const NewBook = () => {
  const history = useHistory();
  const addBookHandler = (bookData) => {
    console.log(bookData);
    history.push("/");
  };
  return <BookForm onAddBook={addBookHandler} />;
};

export default NewBook;

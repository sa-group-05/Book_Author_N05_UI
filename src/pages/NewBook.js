import React, { Fragment, useEffect } from "react";
import BookForm from "../components/Books/BookForm";
import { useHistory } from "react-router";
import useHttp from "../hooks/use-http";
import { addBook } from "../lib/api";

const NewBook = () => {
  const history = useHistory();
  const { sendRequest, status } = useHttp(addBook);
  useEffect(() => {
    if (status === "completed") {
      history.push("/books");
    }
  }, [status, history]);
  const addBookHandler = (bookData) => {
    console.log(bookData);
    sendRequest(bookData);
  };
  return (
    <Fragment>
      <BookForm isLoading={status === "pending"} onAddBook={addBookHandler} />
    </Fragment>
  );
};

export default NewBook;

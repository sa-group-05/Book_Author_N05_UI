import React, { Fragment, useEffect, useState } from "react";
import BookFormEdit from "../components/Books/BookFormEdit";
import { useHistory, useParams } from "react-router";
import useHttp from "../hooks/use-http";
import { addBook } from "../lib/api";
import { URL } from "../constants/Config";
const UpdateBook = () => {
  const history = useHistory();
  const params = useParams();
  const { sendRequest, status } = useHttp(addBook);
  const [bookItem, setBookItem] = useState();
  useEffect(() => {
    if (status === "completed") {
      history.push("/books");
    }
  }, [status, history]);
  const addBookHandler = (bookData) => {
    sendRequest(bookData);
  };

  const updateBookHandler = (data) => {
    if (data) {
      fetch(`${URL}/books`, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
        .then((data) => {
          console.log("Success Update");
          history.push("/books");
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <Fragment>
      <BookFormEdit
        bookId={params.bookId}
        bookItem={bookItem}
        updateBookHandler={updateBookHandler}
        isLoading={status === "pending"}
        onAddBook={addBookHandler}
      />
    </Fragment>
  );
};

export default UpdateBook;

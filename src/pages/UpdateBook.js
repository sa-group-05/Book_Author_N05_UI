import React, { Fragment, useEffect, useState } from "react";
import BookFormEdit from "../components/Books/BookFormEdit";
import { useHistory, useLocation, useParams } from "react-router";
import useHttp from "../hooks/use-http";
import { addBook } from "../lib/api";
import { URL } from "../constants/Config";
// import LoadingSpinner from "../components/UI/LoadingSpinner";
// import NoBooksFound from "../components/Books/NoBooksFound";

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
  
  const updateBookHandler = async (data) => {
    console.log(data);
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

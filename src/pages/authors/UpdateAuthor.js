import React, { Fragment, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import useHttp from "../../hooks/use-http";
import { addBook } from "../../lib/api";
import { URL } from "../../constants/Config";
import AuthorFormEdit from "../../components/Authors/AuthorFormEdit";

const UpdateAuthor = () => {
  const history = useHistory();
  const params = useParams();
  const { sendRequest, status } = useHttp(addBook);
  useEffect(() => {
    if (status === "completed") {
      history.push("/books");
    }
  }, [status, history]);
  const addBookHandler = (bookData) => {
    sendRequest(bookData);
  };

  const updateAuthorHandler = async (data) => {
    console.log(data);
    fetch(`${URL}/authors`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }).then((data) => {
      console.log("Success Update");
      history.push("/authors");
    });
  };
  return (
    <Fragment>
      <AuthorFormEdit
        authorId={params.authorId}
        updateAuthorHandler={updateAuthorHandler}
        isLoading={status === "pending"}
        onAddBook={addBookHandler}
      />
    </Fragment>
  );
};

export default UpdateAuthor;

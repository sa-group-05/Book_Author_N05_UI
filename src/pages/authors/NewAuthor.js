import React, { Fragment, useEffect } from "react";
import { useHistory } from "react-router";
import AuthorForm from "../../components/Authors/Form/AuthorForm";
import useHttp from "../../hooks/use-http";
import { addAuthor } from "../../lib/api";

// import LoadingSpinner from "../components/UI/LoadingSpinner";
// import NoBooksFound from "../components/Books/NoBooksFound";

const NewAuthor = () => {
  const history = useHistory();
  const { sendRequest, status } = useHttp(addAuthor);
  useEffect(() => {
    if (status === "completed") {
      history.push("/authors");
    }
  }, [status, history]);
  console.log();
  const addAuthorHandler = (authorData) => {
    sendRequest(authorData);
  };

  return (
    <Fragment>
      <AuthorForm
        isLoading={status === "pending"}
        onAddAuthor={addAuthorHandler}
      />
    </Fragment>
  );
};

export default NewAuthor;

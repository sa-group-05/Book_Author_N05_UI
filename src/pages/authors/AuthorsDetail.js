import React, { Fragment, useEffect } from "react";
import { useParams, useRouteMatch } from "react-router";
import HighlightedAuthor from "../../components/Authors/HighlightedAuthor";
import LoadingSpinner from "../../components/UI/LoadingSpinner";
import useHttp from "../../hooks/use-http";
import { getSingleAuthor } from "../../lib/api";

const AuthorsDetail = () => {
  const params = useParams();
  const { authorId } = params;
  const {
    sendRequest,
    status,
    data: loadedAuthor,
    error,
  } = useHttp(getSingleAuthor, true);
  useEffect(() => {
    sendRequest(authorId);
  }, [sendRequest, authorId]);
  console.log("AUTHOR DETAIL");
  console.log(loadedAuthor);
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
  if (!loadedAuthor.id) {
    return <p className="centered">No author found!</p>;
  }

  return (
    <Fragment>
      <HighlightedAuthor
        key={loadedAuthor.id}
        id={loadedAuthor.id}
        firstName={loadedAuthor.firstName}
        lastName={loadedAuthor.lastName}
        dateOfBirth={loadedAuthor.dateOfBirth}
        area={loadedAuthor.area}
      />
    </Fragment>
  );
};

export default AuthorsDetail;

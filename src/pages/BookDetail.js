import React, { Fragment, useEffect } from "react";
import { Route, useParams, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import Author from "../components/Authors/Author";
import AuthorName from "../components/Authors/AuthorName";
import HighlightedBook from "../components/Books/HighlightedBook";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleBook } from "../lib/api";

const BookDetail = () => {
  const params = useParams();
  const { bookId } = params;
  const match = useRouteMatch();
  console.log(match);
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
        authorId={loadedBook.authorId}
      />
      <Route path={match.path}>
        <div className="centered">
          <Link
            className="btn--flat"
            to={`${match.url}/author/${loadedBook.authorId}`}
          >
            Author Information
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/author/:authorId`}>
        
        <Author />
      </Route>
    </Fragment>
  );
};

export default BookDetail;

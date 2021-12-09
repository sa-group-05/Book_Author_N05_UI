import React, { useEffect } from "react";
import { useParams } from "react-router";
import useHttp from "../../hooks/use-http";
import { getSingleAuthor } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./Author.module.css";
import AuthorList from "./AuthorList";
const Author = () => {
  const params = useParams();
  const { authorId } = params;
  const {
    sendRequest,
    status,
    data: loadedAuthor,
  } = useHttp(getSingleAuthor, true);

  useEffect(() => {
    sendRequest(authorId);
  }, [sendRequest, authorId]);
  console.log(loadedAuthor);
  let content;

  if (status === "pending") {
    content = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (status === "completed" && loadedAuthor) {
    console.log("Success");
    console.log(loadedAuthor);
    content = <AuthorList author={loadedAuthor} />;
  }

  if (status === "completed" && loadedAuthor.length === 0) {
    console.log("NO");
    console.log(loadedAuthor);
    content = <p className="centered">No infomation!</p>;
  }

  console.log("AUTHOR VINH");
  console.log(loadedAuthor);
  return <section className={classes.author}>{content}</section>;
};

export default Author;

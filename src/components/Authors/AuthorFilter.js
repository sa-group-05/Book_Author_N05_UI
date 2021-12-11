import React, { useEffect } from "react";
import useHttp from "../../hooks/use-http";
import { getAllAuthors } from "../../lib/api";
import NoBooksFound from "../Books/NoBooksFound";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./AuthorFilter.module.css";
const AuthorFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    console.log("Vinh EDIT");
    console.log(event.target.value);
    props.onChangeFilter(event.target.value);
  };
  // [GET] all AUTHORS
  const {
    sendRequest,
    status,
    data: loadedAuthors,
    error,
  } = useHttp(getAllAuthors, true);
  useEffect(() => {
    sendRequest();
  }, [sendRequest]);
  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  if (error) {
    return <p className="centered focused">{error}</p>;
  }
  if (
    status === "completed" &&
    (!loadedAuthors || loadedAuthors.length === 0)
  ) {
    return <NoBooksFound />;
  }
  return (
    <div className={classes.control}>
      <label>Author</label>
      <select value={props.selected} onChange={dropdownChangeHandler}>
        {loadedAuthors.map((author) => {
          return (
            <option key={author.id} value={author.id}>
              {author.firstName + " " + author.lastName}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default AuthorFilter;

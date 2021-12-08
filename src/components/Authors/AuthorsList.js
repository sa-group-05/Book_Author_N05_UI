import React, { Fragment } from "react";
import classes from "./AuthorsList.module.css";
import { useHistory, useLocation } from "react-router";
import AuthorsItem from "./AuthorsItem";
const sortAuthors = (authors, ascending) => {
  return authors.sort((authorA, authorB) => {
    if (ascending) {
      return authorA.id > authorB.id ? 1 : -1;
    } else {
      return authorA.id < authorB.id ? 1 : -1;
    }
  });
};
const AuthorsList = (props) => {
  const history = useHistory();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const isSortingAscending = queryParams.get("sort") === "asc";
  const sortedAuthors = sortAuthors(props.authors, isSortingAscending);

  const changeSortingHandler = () => {
    history.push({
      pathname: location.path,
      search: `?sort=${isSortingAscending ? "desc" : "asc"}`,
    });
  };
  const handleDeleteAuthor = (id) => {
    props.onDeletItem(id);
  };
  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          Sort {isSortingAscending ? " Descending" : " Ascending"}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedAuthors.map((author) => (
          <AuthorsItem
            key={author.id}
            id={author.id}
            firstName={author.firstName}
            lastName={author.lastName}
            dateOfBirth={author.dateOfBirth}
            area={author.area}
            onDeletItem={handleDeleteAuthor}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default AuthorsList;

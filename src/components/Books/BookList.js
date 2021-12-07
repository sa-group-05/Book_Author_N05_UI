import React, { Fragment } from "react";
import BookItem from "./BookItem";
import classes from "./BookList.module.css";
import { useHistory, useLocation } from "react-router";
const sortBooks = (books, ascending) => {
  return books.sort((bookA, bookB) => {
    if (ascending) {
      return bookA.id > bookB.id ? 1 : -1;
    } else {
      return bookA.id < bookB.id ? 1 : -1;
    }
  });
};
const BookList = (props) => {
  const history = useHistory();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const isSortingAscending = queryParams.get("sort") === "asc";
  const sortedBooks = sortBooks(props.books, isSortingAscending);

  const changeSortingHandler = () => {
    history.push({
      pathname: location.path,
      search: `?sort=${isSortingAscending ? "desc" : "asc"}`,
    });
  };
  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          Sort {isSortingAscending ? " Descending" : " Ascending"}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedBooks.map((book) => (
          <BookItem
            key={book.id}
            id={book.id}
            price={book.price}
            title={book.title}
            imageUrl={book.imageUrl}
            publishedYear={book.publishedYear}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default BookList;

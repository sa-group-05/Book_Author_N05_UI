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
  const handleDeleteBook = (id) => {
    props.onDeletItem(id);
  };
  console.log("SORT");
  console.log(sortedBooks);
  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          Sort {isSortingAscending ? " Descending" : " Ascending"}
        </button>
      </div>

      <table className="table table-striped table-hover table-bordered ">
        <thead className="table-success">
          <tr>
            <th className="text-center" scope="col">
              #
            </th>
            <th className="text-center" scope="col">
              Title
            </th>
            <th className="text-center" scope="col">
              Price
            </th>
            <th className="text-center" scope="col">
              Published Year
            </th>
            <th className="text-center" scope="col">
              Image
            </th>
            <th className="text-center" scope="col">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedBooks.map((book, index) => {
            return (
              <BookItem
                onDeletItem={handleDeleteBook}
                key={index}
                id={book.id}
                price={book.price}
                title={book.title}
                imageUrl={book.imageUrl}
                publishedYear={book.publishedYear}
              />
            );
          })}
        </tbody>
      </table>
    </Fragment>
  );
};

export default BookList;

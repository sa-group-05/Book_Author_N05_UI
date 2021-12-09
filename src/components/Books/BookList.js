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
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Published Year</th>
            <th scope="col">Image</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {sortedBooks.map((book, index) => {
            let linkId = book._links.self.href;
            let bookId = linkId.split("/");
            let resultId = bookId[bookId.length - 1];
            return (
              <BookItem
                onDeletItem={handleDeleteBook}
                key={resultId}
                id={resultId}
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

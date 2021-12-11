import { Fragment, useEffect, useState } from "react";
import { Prompt } from "react-router";
import AuthorFilter from "../Authors/AuthorFilter";
import { URL } from "../../constants/Config";
import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./BookForm.module.css";

const BookForm = (props) => {
  const [isEntering, setIsEntering] = useState(false);
  const [enteredPublishedYear, setPublishedYear] = useState("");
  const [enteredImageUrl, setEnteredImageUrl] = useState("");
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [bookId, setBookId] = useState();
  const [filteredAuthor, setFilteredAuthor] = useState();
  const [enteredAuthorId, setEnteredAuthorId] = useState();
  useEffect(() => {
    fetch(`${URL}/books/findDetail/${props.bookId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setEnteredTitle(data.book.title);
        setEnteredPrice(data.book.price);
        setPublishedYear(data.book.publishedYear);
        setEnteredImageUrl(data.book.imageUrl);
        setFilteredAuthor(data.book.authorId);
        setBookId(data.book.id);
      });
  }, []);
  console.log("FILTER AUTHORL", filteredAuthor);
  const publishedYearChangeHandler = (event) => {
    setPublishedYear(event.target.value);
  };
  const imageUrlChangeHandler = (event) => {
    setEnteredImageUrl(event.target.value);
  };
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const priceChangeHandler = (event) => {
    setEnteredPrice(event.target.value);
  };
  const filterChangeHandler = (selectedAuthor) => {
    console.log("author id: ", selectedAuthor);
    setEnteredAuthorId(selectedAuthor);
    setFilteredAuthor(selectedAuthor);
  };
  function submitFormHandler(event) {
    event.preventDefault();
    let data = {
      id: bookId,
      title: enteredTitle,
      price: Number(enteredPrice),
      publishedYear: Number(enteredPublishedYear),
      imageUrl: enteredImageUrl,
      authorId: Number(filteredAuthor),
    };
    console.log(data);
    props.updateBookHandler(data);
    console.log("Update Submit");
  }

  const formFocusedHandler = () => {
    setIsEntering(true);
  };
  const finishEnteringHandler = () => {
    setIsEntering(false);
  };

  return (
    <Fragment>
      <Prompt
        when={isEntering}
        message={(location) =>
          "Are you sure you want to leave? All your entered data will be lost!"
        }
      />
      <Card>
        <h2>FORM EDIT BOOK</h2>
        <form
          onFocus={formFocusedHandler}
          className={classes.form}
          onSubmit={submitFormHandler}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              value={enteredTitle}
              onChange={titleChangeHandler}
              placeholder="Doraemon comic"
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="price">Price</label>
            <input
              type="number"
              id="price"
              value={enteredPrice}
              onChange={priceChangeHandler}
              placeholder="2000"
            />
          </div>
          <div className={classes.control}>
            <label>Published Year</label>
            <input
              type="number"
              value={enteredPublishedYear}
              onChange={publishedYearChangeHandler}
              placeholder="1998"
            />
          </div>
          <div className={classes.control}>
            <label>Image</label>
            <input
              type="text"
              value={enteredImageUrl}
              onChange={imageUrlChangeHandler}
            />
          </div>
          <AuthorFilter
            selected={filteredAuthor}
            onChangeFilter={filterChangeHandler}
          />
          <div className={classes.actions}>
            <button onClick={finishEnteringHandler} className="btn">
              Edit Book
            </button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default BookForm;

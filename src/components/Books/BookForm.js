import { Fragment, useRef, useState } from "react";
import { Prompt } from "react-router";
import AuthorFilter from "../Authors/AuthorFilter";

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./BookForm.module.css";

const BookForm = (props) => {
  const [isEntering, setIsEntering] = useState(false);

  const [enteredPublishedYear, setPublishedYear] = useState("");

  const [enteredImageUrl, setEnteredImageUrl] = useState("");

  const titleInputRef = useRef();
  const priceInputRef = useRef();

  const [filteredAuthor, setFilteredAuthor] = useState();

  const [enteredAuthorId, setEnteredAuthorId] = useState();

  const publishedYearChangeHandler = (event) => {
    setPublishedYear(event.target.value);
  };

  const imageUrlChangeHandler = (event) => {
    setEnteredImageUrl(event.target.value);
  };
  const filterChangeHandler = (selectedAuthor) => {
    setEnteredAuthorId(selectedAuthor);
    setFilteredAuthor(selectedAuthor);
  };
  function submitFormHandler(event) {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredPrice = priceInputRef.current.value;
    let newData = {
      title: enteredTitle,
      price: enteredPrice,
      publishedYear: enteredPublishedYear,
      imageUrl: enteredImageUrl,
      authorId: Number(enteredAuthorId),
    };
    props.onAddBook(newData);
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
              ref={titleInputRef}
              placeholder="Doraemon comic"
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="price">Price</label>
            <input
              type="number"
              id="price"
              ref={priceInputRef}
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
              Add Book
            </button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default BookForm;

import { Fragment, useRef, useState } from "react";
import { Prompt } from "react-router";

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./BookForm.module.css";

const BookForm = (props) => {
  const [isEntering, setIsEntering] = useState(false);

  const titleInputRef = useRef();
  const priceInputRef = useRef();

  const [enteredPublishedYear, setPublishedYear] = useState("");
  const [enteredImageUrl, setenteredImageUrl] = useState("");

  const publishedYearChangeHandler = (event) => {
    console.log(event.target.value);
    setPublishedYear(event.target.value);
  };

  const imageUrlChangeHandler = (event) => {
    console.log(event.target.value);
    setenteredImageUrl(event.target.value);
  };

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredPrice = priceInputRef.current.value;

    // optional: Could validate here
    let newData = {
      title: enteredTitle,
      price: enteredPrice,
      publishedYear: enteredPublishedYear,
      imageUrl: enteredImageUrl,
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

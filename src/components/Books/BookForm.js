import { Fragment, useRef, useState } from "react";
import { Prompt } from "react-router";

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./BookForm.module.css";

const BookForm = (props) => {
  const [isEntering, setIsEntering] = useState(false);

  const titleInputRef = useRef();
  const priceInputRef = useRef();

  const publishedYearInputRef = useRef();
  const imageUrlInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredPrice = priceInputRef.current.value;

    props.onAddBook({
      title: enteredTitle,
      price: enteredPrice,
      publishedYear: publishedYearInputRef.current.value,
      imageUrl: imageUrlInputRef.current.value,
    });
  }
  const finishEnteringHandler = () => {
    setIsEntering(false);
  };

  const formFocusedHandler = () => {
    setIsEntering(true);
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
            <label htmlFor="author">Title</label>
            <input type="text" id="title" ref={titleInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="text">Price</label>
            <input type="text" id="price" ref={priceInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="text">Published Year</label>
            <input type="text" id="publishedYear" ref={publishedYearInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="text">Image</label>
            <input type="text" id="imageUrl" ref={imageUrlInputRef} />
          </div>
          <div className={classes.actions}>
            <button className="btn" onClick={finishEnteringHandler}>
              Add Book
            </button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default BookForm;

import { Fragment, useRef, useState } from "react";
import { Prompt } from "react-router";
import Card from "../../UI/Card";
import LoadingSpinner from "../../UI/LoadingSpinner";
import classes from "./AuthorForm.module.css";
const AuthorForm = (props) => {
  const [isEntering, setIsEntering] = useState(false);

  const [enteredFirstName, setEnteredFirstName] = useState("");

  const [enteredLastName, setLastName] = useState("");

  const dateInputRef = useRef();
  const areaInputRef = useRef();

  const firstNameChangeHandler = (event) => {
    setEnteredFirstName(event.target.value);
  };

  const lastNameChangeHandler = (event) => {
    setLastName(event.target.value);
  };
  function submitFormHandler(event) {
    event.preventDefault();
    const enteredDate = dateInputRef.current.value;
    const enteredArea = areaInputRef.current.value;
    console.log(enteredDate);
    const dateSplit = enteredDate.split("-");
    const day = dateSplit[2];
    const month = dateSplit[1];
    const year = dateSplit[0];
    const enterDateOfBirth = day + "-" + month + "-" + year;
    let newData = {
      firstName: enteredFirstName,
      lastName: enteredLastName,
      dateOfBirth: enterDateOfBirth,
      area: enteredArea,
    };
    props.onAddAuthor(newData);
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
        <h2>FORM ADD AUTHOR</h2>

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
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              value={enteredFirstName}
              onChange={firstNameChangeHandler}
              placeholder="Quynh"
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              value={enteredLastName}
              onChange={lastNameChangeHandler}
              placeholder="Anh"
            />
          </div>
          <div className={classes.control}>
            <label>BirthDay</label>
            <input type="date" max="2022-12-31" ref={dateInputRef} />
          </div>
          <div className={classes.control}>
            <label>Area</label>
            <input type="text" ref={areaInputRef} placeholder="HaNoi" />
          </div>

          <div className={classes.actions}>
            <button onClick={finishEnteringHandler} className="btn">
              Add Author
            </button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default AuthorForm;

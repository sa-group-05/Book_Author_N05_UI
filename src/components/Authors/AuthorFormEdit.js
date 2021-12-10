import { Fragment, useEffect, useState } from "react";
import { Prompt } from "react-router";
import { URL } from "../../constants/Config";
import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./AuthorFormEdit.module.css";

const AuthorFormEdit = (props) => {
  const [isEntering, setIsEntering] = useState(false);

  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredLastName, setLastName] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredArea, setArea] = useState("");
  useEffect(() => {
    fetch(`${URL}/authors/${props.authorId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEnteredFirstName(data.firstName);
        setLastName(data.lastName);
        const dateSplit = data.dateOfBirth.split("-");
        const day = dateSplit[0];
        const month = dateSplit[1];
        const year = dateSplit[2];
        const enterDateOfBirth = year + "-" + month + "-" + day;
        console.log(enterDateOfBirth);
        setEnteredDate(enterDateOfBirth);
        setArea(data.area);
      });
  }, []);

  const firstNameChangeHandler = (event) => {
    setEnteredFirstName(event.target.value);
  };
  const lastNameChangeHandler = (event) => {
    setLastName(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const areaChangeHandler = (event) => {
    setArea(event.target.value);
  };
  function submitFormHandler(event) {
    event.preventDefault();
    const dateSplit = enteredDate.split("-");
    const day = dateSplit[2];
    const month = dateSplit[1];
    const year = dateSplit[0];
    const enterDateOfBirth = day + "-" + month + "-" + year;
    let data = {
      firstName: enteredFirstName,
      lastName: enteredLastName,
      dateOfBirth: enterDateOfBirth,
      area: enteredArea,
    };
    props.updateAuthorHandler(data);

    // props.onAddAuthor(newData);
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
        <h2>FORM UPDATE AUTHOR</h2>

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
            <input
              type="date"
              max="2022-12-31"
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
          <div className={classes.control}>
            <label>Area</label>
            <input
              type="text"
              value={enteredArea}
              onChange={areaChangeHandler}
              placeholder="HaNoi"
            />
          </div>

          <div className={classes.actions}>
            <button onClick={finishEnteringHandler} className="btn">
              Update Author
            </button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default AuthorFormEdit;

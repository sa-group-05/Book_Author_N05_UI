import { useState, useRef, useContext } from "react";
import { useHistory } from "react-router";
// import AuthContext from "../../store/auth-context";

import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const userInputRef = useRef();
  const passwordInputRef = useRef();
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Submit");
    const enteredUser = userInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    setIsLoading(true);
    let url;
    if (isLogin) {
      url = "";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAmZS2eq0bMqAf1-JZxJgZlzrCl6-ed1jA";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredUser,
        password: enteredPassword,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed!";
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="user">Your Email</label>
          <input type="text" id="user" required ref={userInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          {!isLoading && (
            <button>{isLogin ? "Login" : "Create Account"}</button>
          )}
          {isLoading && <p>Sending request...</p>}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;

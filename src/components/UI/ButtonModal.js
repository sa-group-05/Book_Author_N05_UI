import React from "react";
import classes from "./ButtonModal.module.css";
const ButtonModal = (props) => {
  return (
    <button
      className={classes.button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
export default ButtonModal;

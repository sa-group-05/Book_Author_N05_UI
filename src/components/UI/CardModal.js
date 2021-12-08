import React from "react";
import classes from "./CardModal.module.css";
function CardModal(props) {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
}

export default CardModal;

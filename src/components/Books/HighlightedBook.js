import { Fragment } from "react";
import classes from "./HighlightedBook.module.css";

const HighlightedBook = (props) => {
  return (
    <Fragment>
      <div className={classes.book}>
        <p>Title: {props.title}</p>
        <figcaption>Price: {props.price}</figcaption>
        <figcaption>Publised Year: {props.publishedYear}</figcaption>
        <figcaption valign="middle" align="center">
          <img src={props.imageUrl} alt={props.title} width="120" />
        </figcaption>
        <span>AuthorId: {props.authorId}</span>
      </div>
    </Fragment>
  );
};

export default HighlightedBook;

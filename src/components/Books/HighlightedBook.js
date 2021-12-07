import classes from "./HighlightedBook.module.css";

const HighlightedBook = (props) => {
  return (
    <figure className={classes.quote}>
      <p>{props.title}</p>
      <figcaption>{props.price}</figcaption>
    </figure>
  );
};

export default HighlightedBook;

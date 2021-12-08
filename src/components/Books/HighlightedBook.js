import classes from "./HighlightedBook.module.css";

const HighlightedBook = (props) => {
  console.log(props);
  return (
    <figure className={classes.quote}>
      <p>{props.title}</p>
      <figcaption>{props.price}</figcaption>
      <figcaption>{props.publishedYear}</figcaption>
      <figcaption>{props.imageUrl}</figcaption>
    </figure>
  );
};

export default HighlightedBook;

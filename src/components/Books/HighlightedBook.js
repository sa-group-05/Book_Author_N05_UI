import classes from "./HighlightedBook.module.css";

const HighlightedBook = (props) => {
  console.log(props);
  return (
    <figure className={classes.quote}>
      <p>Title: {props.title}</p>
      <figcaption>Price: {props.price}</figcaption>
      <figcaption>Publised Year: {props.publishedYear}</figcaption>
      <figcaption>{props.imageUrl}</figcaption>
      <figcaption>Author: {props.authorId}</figcaption>
    </figure>
  );
};

export default HighlightedBook;

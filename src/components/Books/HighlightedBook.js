import classes from "./HighlightedBook.module.css";

const HighlightedBook = (props) => {
  return (
    <>
      <figure className={classes.author}>
        <p>Title: {props.title}</p>
        <figcaption>Price: {props.price}</figcaption>
        <figcaption>Publised Year: {props.publishedYear}</figcaption>
        <figcaption>{props.imageUrl}</figcaption>
        <span>AuthorId: {props.authorId}</span>
      </figure>
    </>
  );
};

export default HighlightedBook;

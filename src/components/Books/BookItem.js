import { Link } from "react-router-dom";
import classes from "./BookItem.module.css";
const BookItem = (props) => {
  const deleteBookItem = (bookId) => {
    props.onDeletItem(bookId);
  };

  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.title}</p>
        </blockquote>
        <figcaption>{props.price}</figcaption>
        <figcaption>{props.publishedYear}</figcaption>
        <figcaption>{props.imageUrl}</figcaption>
      </figure>
      <Link className="btn" to={`/books/${props.id}`}>
        View Fullscreen
      </Link>
      &nbsp;
      <button
        type="button"
        className="btn"
        onClick={() => {
          deleteBookItem(props.id);
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default BookItem;

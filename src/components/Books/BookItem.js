import { Link } from "react-router-dom";
import classes from "./BookItem.module.css";
const BookItem = (props) => {
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
      <Link className="btn" to={`/books/${props.id}/delete`}>
        Delete
      </Link>
    </li>
  );
};

export default BookItem;

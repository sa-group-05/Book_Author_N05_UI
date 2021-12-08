import { Link } from "react-router-dom";
import classes from "./BookItem.module.css";
import { useHistory } from "react-router-dom";
const BookItem = (props) => {
  const history = useHistory();
  const deleteBookItem = (bookId) => {
    props.onDeletItem(bookId);
  };
  const updateBookHandler = (bookId) => {
    history.push("/update/" + bookId);
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
        onClick={() => updateBookHandler(props.id)}
      >
        UPDATE
      </button>
      {/* <Route path={`/books/${props.id}/update`}>
        <UpdateBook />
      </Route> */}
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

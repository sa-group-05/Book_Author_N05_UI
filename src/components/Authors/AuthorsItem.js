import { Link } from "react-router-dom";
import classes from "./AuthorsItem.module.css";
const AuthorsItem = (props) => {
  const { area, lastName, firstName, dateOfBirth, id } = props;
  const deleteAuthorItem = (id) => {
    props.onDeletItem(id);
  };

  return (
    <li key={id} className={classes.item}>
      <figure>
        <blockquote>
          <p>
            {firstName} {lastName}
          </p>
        </blockquote>
        <figcaption>{dateOfBirth}</figcaption>
        <figcaption>{area}</figcaption>
      </figure>
      <Link className="btn" to={`/authors/${id}`}>
        View Fullscreen
      </Link>
      &nbsp;
      <button
        type="button"
        className="btn"
        onClick={() => {
          deleteAuthorItem(id);
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default AuthorsItem;

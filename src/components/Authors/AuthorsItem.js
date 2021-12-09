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
            FullName: {firstName} {lastName}
          </p>
        </blockquote>
        <figcaption>BirthDay: {dateOfBirth}</figcaption>
        <figcaption>Area: {area}</figcaption>
      </figure>
      <Link className="btn" to={`/authors/${id}`}>
        <i className="fal fa-eye"></i>
      </Link>
      &nbsp;
      <button
        type="button"
        className="btn"
        onClick={() => {
          deleteAuthorItem(id);
        }}
      >
        <i class="fal fa-trash-alt"></i>
      </button>
    </li>
  );
};

export default AuthorsItem;

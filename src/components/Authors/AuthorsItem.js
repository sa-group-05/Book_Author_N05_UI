import { Link } from "react-router-dom";
import classes from "./AuthorsItem.module.css";
const AuthorsItem = (props) => {
  const { area, lastName, firstName, dateOfBirth, id } = props;
  const deleteAuthorItem = (id) => {
    props.onDeletItem(id);
  };
  const updateAuthorHandler = (id) => {
    console.log(id);
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
      <Link
        to={{
          pathname: `author/update/${id}`,
        }}
      >
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => updateAuthorHandler(props.id)}
        >
          <i className="fal fa-user-edit"></i>
        </button>
      </Link>{" "}
      &nbsp;
      <button
        type="button"
        className="btn"
        onClick={() => {
          deleteAuthorItem(id);
        }}
      >
        <i className="fal fa-trash-alt"></i>
      </button>
    </li>
  );
};

export default AuthorsItem;

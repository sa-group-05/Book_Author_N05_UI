import { Link } from "react-router-dom";
import classes from "./AuthorsItem.module.css";
import { useHistory } from "react-router-dom";
const AuthorsItem = ({ area, lastName, firstName, dateOfBirth, id }) => {
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
    </li>
  );
};

export default AuthorsItem;

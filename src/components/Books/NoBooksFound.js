import { Link } from "react-router-dom";
import classes from "./NoBooksFound.module.css";

const NoBooksFound = () => {
  return (
    <div className={classes.nobooks}>
      <p>No books found!</p>
      <Link className="btn" to={`/new-book`}>
        Add a Book
      </Link>
    </div>
  );
};

export default NoBooksFound;

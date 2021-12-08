import { Link, NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <Link to="/">
        {" "}
        <div className={classes.logo}>Book Store</div>
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/books" activeClassName={classes.active}>
              List Books
            </NavLink>
          </li>
          <li>
            <NavLink to="/new-book" activeClassName={classes.active}>
              Add Book
            </NavLink>
          </li>
          <li>
            <NavLink to="/authors" activeClassName={classes.active}>
              List Authors
            </NavLink>
          </li>
          <li>
            <NavLink to="/new-author" activeClassName={classes.active}>
              Add Author
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;

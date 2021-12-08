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
            <NavLink to="/dashboard" activeClassName={classes.active}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/books" activeClassName={classes.active}>
              All Books
            </NavLink>
          </li>
          <li>
            <NavLink to="/new-book" activeClassName={classes.active}>
              Add a Book
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;

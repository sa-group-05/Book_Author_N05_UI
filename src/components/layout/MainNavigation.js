import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../store/auth-context";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);
  const logoutHandler = () => {
    authCtx.logout();
  };

  return (
    <header className={classes.header}>
      <Link to="/">
        {" "}
        <div className={classes.logo}>Book Store</div>
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/home" activeClassName={classes.active}>
              Home
            </NavLink>
          </li>
          {authCtx.isLoggedIn && (
            <li>
              <NavLink to="/books" activeClassName={classes.active}>
                List Books
              </NavLink>
            </li>
          )}
          {authCtx.isLoggedIn && (
            <li>
              <NavLink to="/new-book" activeClassName={classes.active}>
                Add Book
              </NavLink>
            </li>
          )}
          {authCtx.isLoggedIn && (
            <li>
              <NavLink to="/authors" activeClassName={classes.active}>
                List Authors
              </NavLink>
            </li>
          )}
          {authCtx.isLoggedIn && (
            <li>
              <NavLink to="/new-author" activeClassName={classes.active}>
                Add Author
              </NavLink>
            </li>
          )}
          {!authCtx.isLoggedIn && (
            <li>
              <NavLink to="/auth" activeClassName={classes.active}>
                Login
              </NavLink>
            </li>
          )}
          {authCtx.isLoggedIn && (
            <li
              className="logout"
              style={{ color: "#88dfdf" }}
              onClick={logoutHandler}
            >
              Logout
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;

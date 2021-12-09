import { useContext } from "react";
import { Redirect, Route, Switch } from "react-router";
import Layout from "./components/Layout/Layout";
import AllBooks from "./pages/AllBooks";
import AuthPage from "./pages/auth/AuthPage";
import HomePage from "./pages/auth/HomePage";
import AllAuthors from "./pages/authors/AllAuthors";
import AuthorsDetail from "./pages/authors/AuthorsDetail";
import NewAuthor from "./pages/authors/NewAuthor";
import BookDetail from "./pages/BookDetail";
import Home from "./pages/Home";
import NewBook from "./pages/NewBook";
import NotFound from "./pages/NotFound";
import UpdateBook from "./pages/UpdateBook";
import AuthContext from "./store/auth-context";
// import Home from "./pages/Home";

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <Layout>
      <Switch>
        {/* <Route path="/" exact>
          <Redirect to="/books" />
        </Route> */}
        <Route path="/" exact>
          <Home />
        </Route>
        {!authCtx.isLoggedIn && (
          <Route path="/auth">
            <AuthPage />
          </Route>
        )}
        <Route path="/books" exact>
          {authCtx.isLoggedIn && <AllBooks />}
          {!authCtx.isLoggedIn && <Redirect to="/auth" />}
        </Route>
        <Route path="/books/:bookId">
          {authCtx.isLoggedIn && <BookDetail />}
          {!authCtx.isLoggedIn && <Redirect to="/auth" />}
        </Route>{" "}
        <Route path="/update/:bookId">
          {authCtx.isLoggedIn && <UpdateBook />}
          {!authCtx.isLoggedIn && <Redirect to="/auth" />}
        </Route>{" "}
        <Route path="/new-book">
          {authCtx.isLoggedIn && <NewBook />}
          {!authCtx.isLoggedIn && <Redirect to="/auth" />}
        </Route>
        <Route path="/authors" exact>
          {authCtx.isLoggedIn && <AllAuthors />}
          {!authCtx.isLoggedIn && <Redirect to="/auth" />}
        </Route>
        <Route path="/authors/:authorId">
          {authCtx.isLoggedIn && <AuthorsDetail />}
          {!authCtx.isLoggedIn && <Redirect to="/auth" />}
        </Route>{" "}
        <Route path="/new-author">
          {authCtx.isLoggedIn && <NewAuthor />}
          {!authCtx.isLoggedIn && <Redirect to="/auth" />}
        </Route>
        <Route path="/welcome" exact>
          <HomePage />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;

import {Route, Switch } from "react-router";
import Layout from "./components/Layout/Layout";
import AllBooks from "./pages/AllBooks";
import AllAuthors from "./pages/authors/AllAuthors";
import AuthorsDetail from "./pages/authors/AuthorsDetail";
import NewAuthor from "./pages/authors/NewAuthor";
import BookDetail from "./pages/BookDetail";
import Home from "./pages/Home";
import NewBook from "./pages/NewBook";
import NotFound from "./pages/NotFound";
import UpdateBook from "./pages/UpdateBook";
// import Home from "./pages/Home";

function App() {
  return (
    <Layout>
      <Switch>
        {/* <Route path="/" exact>
          <Redirect to="/books" />
        </Route> */}
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/books" exact>
          <AllBooks />
        </Route>
        <Route path="/books/:bookId">
          <BookDetail />
        </Route>{" "}
        <Route path="/update/:bookId">
          <UpdateBook />
        </Route>{" "}
        <Route path="/new-book">
          <NewBook />
        </Route>
        <Route path="/authors" exact>
          <AllAuthors />
        </Route>
        <Route path="/authors/:authorId">
          <AuthorsDetail />
        </Route>{" "}
        <Route path="/new-author">
          <NewAuthor />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;

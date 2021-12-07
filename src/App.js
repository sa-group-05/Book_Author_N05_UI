import { Redirect, Route, Switch } from "react-router";
import Layout from "./components/layout/Layout";
import AllBooks from "./pages/AllBooks";
import BookDetail from "./pages/BookDetail";
import NewBook from "./pages/NewBook";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/dashboard" />
        </Route>
        <Route path="/dashboard" exact>
          <Home />
        </Route>
        <Route path="/books" exact>
          <AllBooks />
        </Route>
        <Route path="/books/:bookId">
          <BookDetail />
        </Route>{" "}
        <Route path="/new-book">
          <NewBook />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;

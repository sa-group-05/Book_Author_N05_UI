import React, { useEffect } from "react";
import LoadingSpinner from "../../components/UI/LoadingSpinner";
import useHttp from "../../hooks/use-http";
import NoBooksFound from "../../components/Books/NoBooksFound";
import { getAllAuthors } from "../../lib/api";
import AuthorsList from "../../components/Authors/AuthorsList";
const AllAuthors = () => {
  // [GET] all AUTHORS
  const {
    sendRequest,
    status,
    data: loadedAuthors,
    error,
  } = useHttp(getAllAuthors, true);
  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  if (error) {
    return <p className="centered focused">{error}</p>;
  }
  if (
    status === "completed" &&
    (!loadedAuthors || loadedAuthors.length === 0)
  ) {
    return <NoBooksFound />;
  }
  console.log(loadedAuthors);
  return <AuthorsList authors={loadedAuthors} />;
};

export default AllAuthors;

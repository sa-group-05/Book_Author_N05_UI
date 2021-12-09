import React, { useEffect } from "react";
import LoadingSpinner from "../../components/UI/LoadingSpinner";
import useHttp from "../../hooks/use-http";
import NoBooksFound from "../../components/Books/NoBooksFound";
import { getAllAuthors } from "../../lib/api";
import AuthorsList from "../../components/Authors/AuthorsList";
import { URL } from "../../constants/Config";
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
  const handleDeleteAuthor = (id) => {
    console.log(id);
    console.log(`${URL}/authors/${id}`);
    fetch(`${URL}/authors/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then(() => {
        console.log("Delete Success!");
        sendRequest();
      })
      .catch((err) => alert(err));
  };
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
  return (
    <AuthorsList onDeletItem={handleDeleteAuthor} authors={loadedAuthors} />
  );
};

export default AllAuthors;

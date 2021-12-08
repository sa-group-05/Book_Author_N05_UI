import { Fragment } from "react";

const AuthorName = (props) => {
  console.log(props.author);
  return (
    <Fragment>
      <figcaption>Author: </figcaption>
    </Fragment>
  );
};

export default AuthorName;

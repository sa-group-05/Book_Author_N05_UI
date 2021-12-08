import AuthorDetail from "./AuthorDetail";
import classes from "./AuthorList.module.css";

const AuthorList = (props) => {
  console.log("AUTHOR LIST");
  console.log(props.author);
  const { id, firstName, lastName, dateOfBirth, area } = props.author;
  return (
    <ul className={classes.authors}>
      <AuthorDetail
        key={id}
        id={id}
        firstName={firstName}
        lastName={lastName}
        dateOfBirth={dateOfBirth}
        area={area}
      />
    </ul>
  );
};

export default AuthorList;

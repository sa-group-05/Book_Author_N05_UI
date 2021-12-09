import classes from "./AuthorDetail.module.css";

const AuthorDetail = (props) => {
  console.log("AUTHOR ITEM");
  const { id, firstName, lastName, dateOfBirth, area } = props;
  console.log(props);
  console.log(firstName);
  console.log(lastName);
  return (
    <li key={id} className={classes.item}>
      <p>
        FullName: {firstName}&nbsp;{lastName}
      </p>
      <p>BirthDay: {dateOfBirth}</p>
      <p>Area: {area}</p>
    </li>
  );
};

export default AuthorDetail;

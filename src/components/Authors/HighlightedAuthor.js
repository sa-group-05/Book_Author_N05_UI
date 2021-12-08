import classes from "./HighlightedAuthor.module.css";

const HighlightedAuthor = ({ id, firstName, lastName, dateOfBirth, area }) => {
  console.log("ITEM AUTHOR");
  console.log(firstName);
  return (
    <>
      <figure key={id} className={classes.author}>
        <p>
          Name: {firstName} {lastName}
        </p>
        <figcaption>BirthDay: {dateOfBirth}</figcaption>
        <figcaption>Area: {area}</figcaption>
      </figure>
    </>
  );
};

export default HighlightedAuthor;

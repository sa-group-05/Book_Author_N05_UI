import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Fragment } from "react";
const BookItem = (props) => {
  const history = useHistory();
  const { id, title, price, publishedYear, imageUrl } = props;

  const deleteBookItem = (bookId) => {
    props.onDeletItem(bookId);
  };
  const updateBookHandler = (bookId) => {
    // history.push("/update/" + bookId);
  };
  return (
    <Fragment>
      <tr>
        <th scope="row">{id}</th>
        <td>{title}</td>
        <td>{price} VNĐ</td>
        <td>{publishedYear}</td>
        <td valign="middle" align="center">
          <img src={imageUrl} alt={title} width="120" />
        </td>
        <td col="3">
          {" "}
          <Link className="btn btn-success" to={`/books/${props.id}`}>
            <i className="fal fa-eye"></i>
          </Link>{" "}
          <Link
            to={{
              pathname: `/update/${props.id}`,
            }}
          >
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => updateBookHandler(props.id)}
            >
              <i className="fal fa-user-edit"></i>
            </button>
          </Link>{" "}
          &nbsp;
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              deleteBookItem(props.id);
            }}
          >
            <i className="fal fa-trash-alt"></i>
          </button>
        </td>
      </tr>
      {/* <Route path={`/books/${props.id}/update`}>
        <UpdateBook />
      </Route> */}
    </Fragment>
  );
};

export default BookItem;

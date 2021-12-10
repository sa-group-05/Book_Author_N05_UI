import React from "react";
import "./BookItemHome.css";
const BookItemHome = (props) => {
  const { imageUrl, price, publishedYear, title } = props;
  console.log(imageUrl);
  return (
    <div className="col-xs-6 col-md-3">
      <div className="horizontal-content__item">
        <span className="item-picture" valign="middle" align="center">
          <img src={imageUrl} alt={title} />
        </span>

        <div className="item-paragraph">
          <h5>Title: {title} </h5>
        </div>

        <div className="item-star">
          <div className="item-star__icon">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
            <i className="far fa-star"></i>
          </div>

          <div className="item-star__rate">
            <span>4.3</span>
          </div>
        </div>

        <div className="item-note">
          <div className="item-note__second">
            <div className="second-time">
              <span>Price: {price}</span>
            </div>
            <div className="second-time">
              <span>Year: {publishedYear}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookItemHome;

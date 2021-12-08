import React from "react";
import { Link } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";
import classes from "./DashBoard.module.css";
const DashBoard = () => {
  return (
    <Fragment>
      <section className={classes.starting}>
        <div>
          <span>Subproject_KTTKPM14_N10 vs BOOK - AUTHOR</span>
        </div>
      </section>
      <div className={classes.centered}>
        <h2>Members</h2>
        <p>Group 10</p>
      </div>
      <div className={classes.members}>
        <div>
          <span>Huỳnh Thanh Bình</span>
        </div>
        <div>
          <span>Điểu Long</span>
        </div>
        <div>
          <span>Dương Cát Luynh</span>
        </div>
        <div>
          <span>Hoàng Xuân Khang</span>
        </div>
        <div>
          <span>Trần Trung Vinh</span>
        </div>
      </div>
      <div className={classes.centered}>
        <h2>Project Book-Author</h2>
        <p>Nhấn vào link dưới:</p>
      </div>
      <div className={classes.centered}>
        <Link to="/books">Book-Author</Link>
      </div>
    </Fragment>
  );
};

export default DashBoard;

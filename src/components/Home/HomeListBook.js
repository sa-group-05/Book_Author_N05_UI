import React from "react";
import BookItemHome from "./BookItemHome";
import "./HomeListBook.css";
const HomeListBook = (props) => {
  console.log(props.books);
  return (
    <div className="content-main">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-8">
            <div className="content-main__horizontal">
              <div className="horizontal-title">
                <div className="rotate">
                  <i className="fas fa-star"></i>
                  <div></div>
                </div>
                <p>LATEST MANGA UPDATES</p>
              </div>

              <div className="horizontal-content">
                {/* <div className="row"></div> */}
                <div className="row">
                  {props.books.map((book, index) => {
                    return (
                      <BookItemHome
                        key={index}
                        id={book.id}
                        price={book.price}
                        title={book.title}
                        imageUrl={book.imageUrl}
                        publishedYear={book.publishedYear}
                      />
                    );
                  })}
                </div>
              </div>

              <div className="row">
                <div className="more">
                  <a href="#">
                    View More
                    <i className="far fa-chevron-down"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-md-4">
            <div className="content-main__vertical">
              <div className="vertical-title">
                <div className="rotate">
                  <p>popular manga update</p>
                  <div></div>
                </div>
              </div>

              <div className="vertical-box__item">
                <div className="vertical-item">
                  <div className="vertical-item__picture">
                    <img
                      src="https://i.pinimg.com/564x/e7/58/1d/e7581d99b3ba261098f8b56446fc5324.jpg"
                      alt=""
                    />
                  </div>

                  <div className="vertical-item__content">
                    <div className="vertical-item__title">
                      <p>Manga Video Chapters</p>
                    </div>
                    <div className="vertical-item__note">
                      <div className="note-link">
                        <a href="#">Episode 122</a>
                        <a href="#">Episode 121</a>
                      </div>

                      <div className="note-time">
                        <span>May 10, 2018</span>
                        <span>May 10, 2018</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="vertical-item">
                  <div className="vertical-item__picture">
                    <img
                      src="https://i.pinimg.com/564x/fe/a0/cb/fea0cbcaf212682b11b3018afc7bea09.jpg"
                      alt=""
                    />
                  </div>

                  <div className="vertical-item__content">
                    <div className="vertical-item__title">
                      <p>Manga Video Chapters</p>
                    </div>
                    <div className="vertical-item__note">
                      <div className="note-link">
                        <a href="#">Chapter 3</a>
                        <a href="#">Chapter 2</a>
                      </div>

                      <div className="note-time">
                        <span>May 10, 2018</span>
                        <span>May 10, 2018</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="vertical-item">
                  <div className="vertical-item__picture">
                    <img
                      src="https://i.pinimg.com/236x/11/19/22/1119222a41137f598c59275f6c4567af.jpg"
                      alt=""
                    />
                  </div>

                  <div className="vertical-item__content">
                    <div className="vertical-item__title">
                      <p>Manga Video Chapters</p>
                    </div>
                    <div className="vertical-item__note">
                      <div className="note-link">
                        <a href="#">Episode 122</a>
                        <a href="#">Episode 121</a>
                      </div>

                      <div className="note-time">
                        <span>May 10, 2018</span>
                        <span>May 10, 2018</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="vertical-item">
                  <div className="vertical-item__picture">
                    <img
                      src="https://i.pinimg.com/236x/7c/91/a2/7c91a2e38123ccf38f1e53e48d8e47d5.jpg"
                      alt=""
                    />
                  </div>

                  <div className="vertical-item__content">
                    <div className="vertical-item__title">
                      <p>Manga Video Chapters</p>
                    </div>
                    <div className="vertical-item__note">
                      <div className="note-link">
                        <a href="#">Episode 122</a>
                        <a href="#">Episode 121</a>
                      </div>

                      <div className="note-time">
                        <span>May 10, 2018</span>
                        <span>May 10, 2018</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="more-vertical">
                  <a href="#">Here for more Popular Manga</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeListBook;

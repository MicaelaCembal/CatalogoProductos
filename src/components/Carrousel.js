import React from 'react';
import './style.css';

const Carrousel = () => {
  return (
    <div className="slide">
      <div className="slide_container">
        <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
          {/* Indicators */}
          <ol className="carousel-indicators">
            <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
            <li data-target="#carousel-example-generic" data-slide-to="1"></li>
            <li data-target="#carousel-example-generic" data-slide-to="2"></li>
            <li data-target="#carousel-example-generic" data-slide-to="3"></li>
            <li data-target="#carousel-example-generic" data-slide-to="4"></li>
          </ol>

          {/* Wrapper for slides */}
          <div className="carousel-inner" role="listbox">
            <div className="item active">
              <div className="item_img">
                <img src="images/pic1.jpg" alt="picture" />
              </div>
            </div>

            <div className="item">
              <div className="item_img">
                <img src="images/pic3.jpg" alt="picture" />
              </div>
            </div>

            <div className="item">
              <div className="item_img">
                <img src="images/pic4.jpg" alt="picture" />
              </div>
            </div>

            <div className="item">
              <div className="item_img">
                <img src="images/pic6.jpg" alt="picture" />
              </div>
            </div>

            <div className="item">
              <div className="item_img">
                <img src="images/pic7.jpg" alt="picture" />
              </div>
            </div>

            {/* Controls */}
            <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
              <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
              <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div className="slide_con">
          <div className="slide_content">
            <h2>
              FREE SHIPPING over $100*
              <br />
              <span>Send a Gourment Gift or Treat Yourself</span>
            </h2>
            <div className="slide_btn">
              <a href="#">SHOP NOW</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrousel;

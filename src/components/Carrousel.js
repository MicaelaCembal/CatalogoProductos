import React from 'react';
import pic1 from '../images/pic1.jpg';
import pic3 from '../images/pic3.jpg';
import pic4 from '../images/pic4.jpg';
import pic6 from '../images/pic6.jpg';
import pic7 from '../images/pic7.jpg';

const Carrousel = () => {
  return (
    <div className="slide">
      <div className="slide_container">
        <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
            <li data-target="#carousel-example-generic" data-slide-to="1"></li>
            <li data-target="#carousel-example-generic" data-slide-to="2"></li>
            <li data-target="#carousel-example-generic" data-slide-to="3"></li>
            <li data-target="#carousel-example-generic" data-slide-to="4"></li>
          </ol>

          <div className="carousel-inner" role="listbox">
            <div className="item active">
              <div className="item_img">
                <img src={pic1} alt="picture"/>
              </div>
            </div>

            <div className="item">
              <div className="item_img">
                <img src={pic3} alt="picture"/>
              </div>
            </div>

            <div className="item">
              <div className="item_img">
                <img src={pic4} alt="picture"/>
              </div>
            </div>

            <div className="item">
              <div className="item_img">
                <img src={pic6} alt="picture"/>
              </div>
            </div>

            <div className="item">
              <div className="item_img">
                <img src={pic7} alt="picture"/>
              </div>
            </div>
          </div>

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
          <h2>FREE SHIPPING over $100*
            <br/>
            <span>Send a Gourmet Gift or Treat Yourself</span>
          </h2>
          <div className="slide_btn">
            <a href="#">SHOP NOW</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrousel;

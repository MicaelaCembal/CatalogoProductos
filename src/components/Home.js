import React from 'react';
import './style.css';

const Home = () => {
  return (
    <div>
      <div className="slide">
        <div className="slide_container">
          {/* Carousel content here */}
          {/* ... */}
        </div>
        <div className="slide_con">
          <div className="slide_content">
            <h2>FREE SHIPPING over $100*
              <br />
              <span>Send a Gourment Gift or Treat Yourself</span>
            </h2>
            <div className="slide_btn">
              <a href="#">SHOP NOW</a>
            </div>
          </div>
        </div>
      </div>
      <div className="side">
        <div className="left">
          <img src="images/side.jpg" alt="Side Image" />
        </div>
        <div className="right">
          <h2>TRY SOMETHING NEW!</h2>
          <p>
            Discover deliciousness, with new culinary finds added every week. Find your new favorites, from small-batch chocolates and traditionally-cured charcuterie, to innovative preserves and the finest cheeses.
          </p>
          <div className="side_btn">
            <a href="#">SHOP NOW</a>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="main_content">
          <h2>UP TO 30% OFF!
            <br />
            <span>Over 100 of our Favourite Snacks on Sale</span>
          </h2>
        </div>
      </div>
      <div className="product">
        <h2>BEST SELLERS</h2>
        <div className="product_container">
          {/* Product items here */}
          {/* ... */}
        </div>
      </div>
      <hr />
      <div className="keypoint">
        <h2>CHOOSE FROM</h2><br /><br /><br />
        <div className="key_container">
          <div className="key_img">
            <img src="images/back22.jpg" alt="Choose From" />
          </div>
          <div className="key_content">
            <li>Cakes</li>
            <li>Cured Meats</li>
            <li>Cheese</li>
            <li>Specialty Foods</li>
            <li>Curbside</li>
            <li>Fresh and Chevre</li>
          </div>
        </div>
      </div>
      <hr />
      <div className="team">
        <h2>Our Team</h2>
        <div className="team_container">
          <div className="team_video">
            <video controls>
              <source src="images/Restaurant food cinematic video advertisement.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="team_content">
            <p>We provide extraordinary food experiences, inspired by our legacy. Also, we just really love cheese.</p>
            <br /><p>We are a pioneering specialty food retailer and importer that began with a modest shop in the now-iconic North Philadelphia Italian Market in 1989; today, we employ more than 350 proud team members and have evolved into a community-driven enterprise with our five retail locations, catering, import, and e-commerce divisions.</p>
          </div>
        </div>
      </div>
      <div className="feed">
        <h2>WRITE A REVIEW</h2>
        <div className="feed_form" method="post">
          <form name="submit-googlesheet">
            <input type="text" name="Name" placeholder="Name" /><br />
            <input type="email" name="Email" placeholder="Email ID" /><br />
            <input type="text" name="Number" placeholder="Contact Number" /><br />
            <textarea rows="5" cols="7" name="Review" placeholder="Write your review"></textarea><br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <hr />
      <footer>
        <div className="footer_logo">
          <a href="index.html"><img src="images/logo.png" width="250" alt="Culinary King" /></a>
        </div>
        <div className="pages">
          <h3>Customer Care</h3>
          <a href="about.html">About Us</a>|
          <a href="summer.html">Summer Sale</a>|
          <a href="catering.html">Catering</a>|
          <a href="contact.html">Contact</a>
        </div>
        <div className="doc">
          <h3>Documents</h3>
          <a href="#">Privacy Policy</a>|
          <a href="#">Terms of Use</a>|
          <a href="#">Refund Policy</a>
        </div>
        <div className="social">
          <h3>Follow Us</h3>
          <a href="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a>
          <a href="https://www.linkedin.com/" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
          <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
          <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
        </div>
        <div className="contact">
          <h3>Contact Us</h3>
          <a href="https://api.WhatsApp.com/send?phone=+910000000000" target="_blank"><i className="fa fa-whatsapp" aria-hidden="true"></i></a>
          <a href="tel: +910000000000"><i className="fa fa-phone" aria-hidden="true"></i></a>
          <a href="mailto: roshnideyic365@gmail.com"><i className="fa fa-envelope-o" aria-hidden="true"></i></a>
        </div>
        <hr />
        <p>Copyright &copy; 2021 Culinary King. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;

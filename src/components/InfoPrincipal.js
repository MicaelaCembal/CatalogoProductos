import React from 'react';
import sideImage from '../images/side.jpg';
import charImage from '../images/char.jpg';
import baconImage from '../images/bacon.jpg';
import hotImage from '../images/hot.jpg';
import cakeImage from '../images/cake.jpg';
import back22Image from '../images/back22.jpg';
import videoSource from '../images/Restaurant food cinematic video advertisement.mp4';

const InfoPrincipal = () => {
  return (
    <div>
      {/* SIDE */}
      <div className="side">
        <div className="left">
          <img src={sideImage} alt="side"/>
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
      {/* MAIN */}
      <div className="main">
        <div className="main_content">
          <h2>UP TO 30% OFF!
            <br/>
            <span>Over 100 of our Favourite Snacks on Sale</span>
          </h2>
        </div>
      </div>
      {/* PRODUCT */}
      <div className="product">
        <h2>BEST SELLERS</h2>
        <div className="product_container">
          <div className="item">
            <div className="item_img">
              <img src={charImage} alt="charcuterie"/>
            </div>
            <div className="item_content">
              <h3>THE CHARCUTERIE COLLECTION</h3>
              <p>"Cure" their charcuterie obsession</p>
              <br/><br/><br/>
              <a href="#">CHOOSE OPTIONS</a>
            </div>
          </div>
          <div className="item">
            <div className="item_img">
              <img src={baconImage} alt="bacon"/>
            </div>
            <div className="item_content">
              <h3>SOFT PRETZEL PAIRING CLUB</h3>
              <p>The ultimate Philly pretzel experience, delivered monthly</p>
              <br/><br/>
              <a href="#">CHOOSE OPTIONS</a>
            </div>
          </div>
          <div className="item">
            <div className="item_img">
              <img src={hotImage} alt="hot sauce"/>
            </div>
            <div className="item_content">
              <h3>HOT SAUCE GIFT BOX</h3>
              <p>For the adventurous heat lover, this quintet packs a fiery, flavor-filled punch</p>
              <br/><br/>
              <a href="#">CHOOSE OPTIONS</a>
            </div>
          </div>
          <div className="item">
            <div className="item_img">
              <img src={cakeImage} alt="cakes"/>
            </div>
            <div className="item_content">
              <h3>APPETIZING CAKES</h3>
              <p>We deliver delicious cakes of a wide range of flavours which is nothing but the best of the rest desserts</p>
              <br/><br/>
              <a href="#">CHOOSE OPTIONS</a>
            </div>
          </div>
        </div>
      </div>
      <hr/>
      {/* KEYPOINTS */}
      <div className="keypoint">
        <h2>CHOOSE FROM</h2><br/><br/><br/>
        <div className="key_container">
          <div className="key_img">
            <img src={back22Image} alt="keypoints"/>
          </div>
          <div className="key_content">
            <ul>
              <li>Cakes</li>
              <li>Cured Meats</li>
              <li>Cheese</li>
              <li>Specialty Foods</li>
              <li>Curbside</li>
              <li>Fresh and Chevre</li>
            </ul>
          </div>
        </div>
      </div>
      <hr/>
      {/* TEAM */}
      <div className="team">
        <h2>Our Team</h2>
        <div className="team_container">
          <div className="team_video">
            <video controls>
              <source src={videoSource} type="video/mp4"/>
            </video>
          </div>
          <div className="team_content">
            <p>We provide extraordinary food experiences, inspired by our legacy. Also, we just really love cheese.</p>
            <br/>
            <p>We are a pioneering specialty food retailer and importer that began with a modest shop in the now-iconic North Philadelphia Italian Market in 1989; today, we employ more than 350 proud team members and have evolved into a community-driven enterprise with our five retail locations, catering, import and e-commerce divisions.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPrincipal;

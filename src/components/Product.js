import React from 'react';
import { Link } from "react-router-dom";
import cele2 from '../images/cele2.jpg';
import cele1 from '../images/cele1.jpg';
import cele4 from '../images/cele4.jpg';
import cele3 from '../images/cele3.jpg';

const Product = () => {
  return (
<div>
<div className="product" style={{paddingTop: "100px"}}>
      <h2>EVENTS AND CATERING</h2>
      <div className="product_container" style={{paddingBottom: "50px"}}>
        <div className="item">
          <div className="item_img">
            <img src={cele2} alt="Celebration 2" />
          </div>
          <div className="item_content">
            <h3>CELEBRATE WITH FAMILY &amp; FRIENDS</h3>
            <p>We believe great food just makes life that much better. That’s why we travel the world to find the most delicious cheeses, meats, and specialty foods out there. Then we create incredible dishes with them, and serve them at your event to provide an unmatched culinary experience. Ask our catering experts about hosting an outdoor event!</p>
            <br /><br /><br />
            <Link to="/VenusAndSpaces">VENUS AND SPACES</Link>
          </div>
        </div>

        <div className="item">
          <div className="item_img">
            <img src={cele1} alt="Celebration 1" />
          </div>
          <div className="item_content">
            <h3>FULL SERVICE EVENTS</h3>
            <p>If you love food as much as we do, you want your guests to rave about the menu for weeks after the event! Our live action stations bring the entertainment, family style dinner options bring the warmth, and passed hor d’oeuvres serve as the life of the party!</p>
            <br /><br /><br /><br /><br />
            <Link to="/SeeOurEvents">SEE OUR EVENTS</Link>
          </div>
        </div>

        <div className="item">
          <div className="item_img">
            <img src={cele4} alt="Celebration 4" />
          </div>
          <div className="item_content">
            <h3>IN STORE PICK-UP MENU</h3>
            <p>Our In-Store Pickup and Delivery menu brings a taste of Philly to your next meeting or party! We’ll deliver and setup your spread offering everything from sandwich platters, breakfast delights, incredible cheese and meat trays and hot or cold dinner entrees.</p>
            <br /><br /><br /><br /><br />
            <Link to="/ViewDeliveryMenu">VIEW DELIVERY MENU</Link>
          </div>
        </div>

        <div className="item">
          <div className="item_img">
            <img src={cele3} alt="Celebration 3" />
          </div>
          <div className="item_content">
            <h3>OUR FAVOURITE VENUE</h3>
            <p>We are happy to bring our culinary delights and full team to your private event, whether it’s at your home, your workplace, or our stunning new event space at 600 Spring Garden. Our menus feature live culinary action stations, incredible cheese displays for all night snacking, and inventive hors d’oeuvres featuring the best cheeses, meats, and specialty products on earth. We also offer Family Style dining, four course plated dinners, and whatever else your food cravings desire!</p>
            <Link to="/BookNow">BOOK NOW</Link>
          </div>
        </div>
      </div>
    </div>
      <hr/>
      </div>
  );
};

export default Product;
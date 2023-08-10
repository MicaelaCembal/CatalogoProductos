import React from 'react';
import sideImage from '../images/side.jpg';


const ViewDeliveryMenu = () => {
  return (
    <div>
    <br/><br/><br/><br/>
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
      </div>
  );
};

export default ViewDeliveryMenu;

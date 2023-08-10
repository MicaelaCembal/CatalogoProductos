import React from 'react';
import back22Image from '../images/back22.jpg';
const KeyPoints = () => {
  return (
<div>

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
    
    </div>
  );
};

export default KeyPoints;
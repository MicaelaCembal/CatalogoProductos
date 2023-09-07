import React from 'react';
import videoSource from '../images/Restaurant food cinematic video advertisement.mp4';
function Team() {
  return (
 <div className="team">
 <h2>OUR TEAM </h2>
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
  );
};

export default Team;
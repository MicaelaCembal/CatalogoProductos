import React from 'react';
import Footer from './Footer';
const Contacto = () => {
  return (
<div>
    <div className="feed">
      <br/> <br/> <br/>
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
      <Footer/>
    </div>
  );
};

export default Contacto;



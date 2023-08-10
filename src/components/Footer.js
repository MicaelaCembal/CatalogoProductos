import React from 'react';
import logo from '../images/logo.png';

function Footer() {
    return (
        <footer>
            <div className="footer_logo">
                <a href="index.html"><img src={logo} width="250" alt="Logo"/></a>
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
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
            </div>
            <div className="contact">
                <h3>Contact Us</h3>
                <a href="https://api.WhatsApp.com/send?phone=+910000000000" target="_blank" rel="noopener noreferrer"><i className="fa fa-whatsapp" aria-hidden="true"></i></a>
                <a href="tel: +910000000000"><i className="fa fa-phone" aria-hidden="true"></i></a>
                <a href="mailto: roshnideyic365@gmail.com"><i className="fa fa-envelope-o" aria-hidden="true"></i></a>
            </div>
            <hr />
            <p>Copyright &copy; 2021 Culinary King. All rights reserved.</p>
        </footer>
    );
}

export default Footer;

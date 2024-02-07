import React from 'react';
import img1 from '../images/logocom.jpg'
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



function Footer() {
  return (
    <>
    <div className="footer">

      <div className="footer-content">
        <div className="footer-logo">
          <img src={img1} alt="Footer Logo" />
          <span>SHop HUb</span>
        </div>
        <div className="footer-links">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Trusted Companies</a>
          {/* Add more links as needed */}
        </div>
        <div className="footer-social">
          <a href="#" target="_blank" rel="noopener noreferrer">
          <FaFacebook />

          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
         <FaInstagram/>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
          <FaYoutube />

          </a>
          {/* Add more social icons as needed */}
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
      </div>
    </>
  );
}

export default Footer;

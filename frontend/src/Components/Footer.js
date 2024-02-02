import React from 'react';
import { FaFacebook, FaTwitterSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
// import BrandIcon from '../../assets/logo/logo.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="logo-section">
          {/* <img src={BrandIcon} alt="Logo" className="logo" /> */}
          <h1>PrashnaKhoj</h1>
        </div>

        <div className="navigation-section">
          <h3 className="section-title">Navigation</h3>
          <ul className="nav-list">
          <li>
            <NavLink exact to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/result" className="nav-link">
              Questions
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav-link">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="nav-link">
              Contact Us
            </NavLink>
          </li>
          </ul>
        </div>

        <div className="social-section">
          <h3 className="section-title">Social Profiles</h3>
          <ul className="social-list">
            <li><a href="https://www.facebook.com/icesnepal" target="_blank" rel="noopener noreferrer"><FaFacebook/></a></li>
            <li><a href="https://www.facebook.com/icesnepal" target="_blank" rel="noopener noreferrer"><FaTwitterSquare /></a></li>
            <li><a href="https://www.facebook.com/icesnepal" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a></li>
            <li><a href="https://www.facebook.com/icesnepal" target="_blank" rel="noopener noreferrer"><FaInstagramSquare /></a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

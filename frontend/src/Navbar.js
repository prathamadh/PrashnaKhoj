import React from "react";
import "./Navbar.css";
import { faBars } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
          <i className="fas">
            <FontAwesomeIcon icon={faBars} />
          </i>
        </label>
        <label className="logo">PrashnaKhoj</label>
        <ul>
          <li>
            <Link to="/" className=" nav-link active">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link to="/services" className="nav-link">
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/results" className="nav-link">
              Results
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;



import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
import { faBars } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isHomeActive = location.pathname === "/";

  return (
    <div>
      <nav className={`${scrolled || !isHomeActive ? "scrolled" : ""}`}>
        <label className="logo">PrashnaKhoj</label>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
          <i className="fas">
            <FontAwesomeIcon icon={faBars} />
          </i>
        </label>
        <ul>
          <li>
            <NavLink exact to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/result" className="nav-link">
              Questions
            </NavLink>
          </li> */}
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
      </nav>
    </div>
  );
};

export default Navbar;



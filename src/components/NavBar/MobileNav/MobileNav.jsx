import React from "react";
import "./MobileNav.css"

const MobileNav = ({isOpen, toggleMenu}) => {
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container ">
          
        <h2>VS</h2>
          <ul>
            <li>
              <a href="#" className="tabs">
                HOME
              </a>
            </li>
            <li>
              <a href="#" className="tabs">
                SKILLS
              </a>
            </li>
            <li>
              <a href="#" className="tabs">
                ABOUT
              </a>
            </li>
            <li>
              <a href="#" className="tabs">
                PROJECT
              </a>
            </li>
            <li>
              <a href="#" className="tabs">
                CONTACT
              </a>
            </li>
            <button className="contact-button" onClick={()=>{}}>
                Hire Me
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;

import React, { useState } from "react";
import "./NavBar.css";
import MobileNav from "./MobileNav/MobileNav";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
    <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="main-nav">
        <div className="nav-content">
          <h2>VS</h2>
          <ul className="items">
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
          </ul>
          <button className="btn"> Heir Me</button>
          <button className="menu-btn2" onClick={toggleMenu}>
            <span>
             {openMenu ? <ion-icon name="close-outline"></ion-icon> : <ion-icon name="menu-outline"></ion-icon>}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;

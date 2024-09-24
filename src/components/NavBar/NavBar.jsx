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
              <a href="#" className="tabs1">
                HOME
              </a>
            </li>
            <li>
              <a href="#" className="tabs1">
                SKILLS
              </a>
            </li>
            <li>
              <a href="#" className="tabs1">
                ABOUT
              </a>
            </li>
            <li>
              <a href="#" className="tabs1">
                PROJECT
              </a>
            </li>
            <li>
              <a href="#" className="tabs1">
                CONTACT
              </a>
            </li>
          </ul>
          <button className="btn"> Heir Me</button>
          <button className="menu-btn2" onClick={toggleMenu} >
            <span className={"material-symbol-outline"}
            style={{fontSize: "1.8rem"}}>{openMenu? "close":"menu"}
             {/* <ion-icon name={openMenu ? "menu-outline" : "close-outline"} ></ion-icon> */}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;

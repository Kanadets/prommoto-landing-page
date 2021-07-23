import React, { useState } from "react";
import { Link } from "react-scroll";

import prommotoLogo from "assets/prommotoLogo.svg";
import fbLink from "assets/fbLink.svg";
import instLink from "assets/instLink.svg";
import twitterLink from "assets/twitterLink.svg";

import {
  navbarLinksBtnContainer,
  navbarLinks,
  navbarSocialLinksBtnContainer,
  navbarSocialLinks,
  buttonClass,
  navBurgerMenu,
  burgerMenu,
  upperBurger,
  upperBurgerOpen,
  middleBurger,
  middleBurgerOpen,
  bottomBurger,
  bottomBurgerOpen,
  navbarLinksOpened,
  navbarLinksClosed,
} from "./navbar.module.scss";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <nav>
      <img src={prommotoLogo} alt="prommoto logo" />
      <div className={navBurgerMenu} onClick={() => setIsNavOpen(!isNavOpen)}>
        <div
          className={`${burgerMenu} ${upperBurger} ${
            isNavOpen ? upperBurgerOpen : ""
          }`}
        ></div>
        <div
          className={`${burgerMenu} ${middleBurger} ${
            isNavOpen ? middleBurgerOpen : ""
          }`}
        ></div>
        <div
          className={`${burgerMenu} ${bottomBurger} ${
            isNavOpen ? bottomBurgerOpen : ""
          }`}
        ></div>
      </div>
      <div
        className={`${navbarLinksBtnContainer} ${navbarLinksOpened} ${
          isNavOpen ? "" : navbarLinksClosed
        }`}
      >
        <div className={navbarLinks}>
          <Link to="header" smooth={true}>
            Home
          </Link>
          <Link to="forDrivers" smooth={true}>
            Drivers
          </Link>
          <Link to="brands" smooth={true}>
            Brands
          </Link>
          <Link to="forInstallers" smooth={true}>
            Installers
          </Link>
          <Link to="investors" smooth={true} offset={250}>
            Investors
          </Link>
        </div>
        <div className={navbarSocialLinksBtnContainer}>
          <div className={navbarSocialLinks}>
            <a href="#1">
              <img src={fbLink} alt="facebook link" />
            </a>
            <a href="#1">
              <img src={instLink} alt="instagram link" />
            </a>
            <a href="#1">
              <img src={twitterLink} alt="twitter link" />
            </a>
          </div>
          <div className={buttonClass}>
            <button>Get Early Access</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from "react";
import { Link as LinkScroll } from "react-scroll";
import { Link } from "react-router-dom";

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
      <Link to="/">
        <img src={prommotoLogo} alt="prommoto logo" />
      </Link>
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
          <Link to="/" smooth={"smooth"}>
            Home
          </Link>
          <LinkScroll to="forDrivers" smooth={"smooth"}>
            Drivers
          </LinkScroll>
          <LinkScroll to="brands" smooth={"smooth"}>
            Brands
          </LinkScroll>
          <LinkScroll to="forInstallers" smooth={"smooth"}>
            Installers
          </LinkScroll>
          <LinkScroll to="investors" smooth={"smooth"} offset={250}>
            Investors
          </LinkScroll>
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
            <button>
              <span>Get Early Access</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

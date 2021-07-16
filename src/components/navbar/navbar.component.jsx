import React from "react";

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
} from "./navbar.module.scss";

const Navbar = () => {
  return (
    <nav>
      <img src={prommotoLogo} alt="prommoto logo" />
      <div className={navbarLinksBtnContainer}>
        <div className={navbarLinks}>
          <a href="#0">Home</a>
          <a href="#0">Drivers</a>
          <a href="#0">Brands</a>
          <a href="#0">Installers</a>
          <a href="#0">Investors</a>
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

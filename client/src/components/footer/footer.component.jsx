import React from "react";
import { useMediaQuery } from "react-responsive";

import {
  footerSection,
  stayInLoop,
  mainFooterDiv,
  logoDiv,
  contactFollowDiv,
  contactDiv,
  followDiv,
  linksImgDiv,
  stayInLoopMob,
} from "./footer.module.scss";

import prommotoLogo from "assets/prommotoLogo.svg";
import fb from "assets/fb.svg";
import inst from "assets/inst.svg";
import twitter from "assets/twitter.svg";

const Footer = () => {
  const isTablet = useMediaQuery({
    query: "(max-width: 1025px)",
  });

  return (
    <footer className={footerSection}>
      {isTablet ? (
        <>
          <div className={stayInLoopMob}>
            <div>
              <input type="email" required placeholder="Enter your email..." />
              <button>Stay in the Loop</button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={stayInLoop}>
            <input type="email" placeholder="Enter Email Address" />
            <button>
              <span>Stay in the Loop</span>
            </button>
          </div>
        </>
      )}

      <div className={mainFooterDiv}>
        <div className={logoDiv}>
          <img src={prommotoLogo} alt="logo" />
          <p>© 2021 All Rights Reserved</p>
        </div>
        <div className={contactFollowDiv}>
          <div className={contactDiv}>
            <h4>Contact Us</h4>
            <div>
              <p>hosenalkrimi@gmail.com</p>
              <p>+218928607817</p>
            </div>
          </div>
          <div className={followDiv}>
            <h5>Follow Us</h5>
            <div className={linksImgDiv}>
              <img src={fb} alt="" height="27" width="27" />
              <img src={inst} alt="" height="27" width="27" />
              <img src={twitter} alt="" height="27" width="27" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

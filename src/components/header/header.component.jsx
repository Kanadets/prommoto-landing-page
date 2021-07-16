import React from "react";

import carImg from "assets/carMockup.svg";
import roadImg from "assets/bottomCar.png";

import {
  headerTextContainer,
  headerImgContainer,
  carImgClass,
  roadImgClass,
} from "./header.module.scss";

const Header = () => {
  return (
    <header>
      <div className={headerTextContainer}>
        <h1>
          <span>Get paid</span> for doing what you already do.
        </h1>
        <p>
          The future of data. Specializing in Out of Home Advertising. Creating
          connections between the physical and digital worlds.
        </p>
      </div>
      <div className={headerImgContainer}>
        <img src={carImg} alt="car's mockup" className={carImgClass} />
        <img src={roadImg} alt="road" className={roadImgClass} />
      </div>
    </header>
  );
};

export default Header;

import React from "react";

import {
  partnersLogosSection,
  logosContainer,
} from "./partnersLogos.module.scss";

import logo1 from "assets/logo1.svg";
import logo2 from "assets/logo2.svg";
import logo3 from "assets/logo3.svg";
import logo4 from "assets/logo4.svg";

const PartnersLogos = () => {
  return (
    <section className={partnersLogosSection}>
      <div className={logosContainer}>
        <img src={logo1} alt="logo1" />
        <img src={logo2} alt="logo2" />
        <img src={logo3} alt="logo3" />
        <img src={logo4} alt="logo4" />
      </div>
    </section>
  );
};

export default PartnersLogos;

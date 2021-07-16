import React from "react";

import {
  brandsIndividualsSection,
  brandsIndividualsContainer,
} from "./brandsIndividuals.module.scss";

import graphPic from "assets/pathBack.png";

const BrandsIndividuals = () => {
  return (
    <section className={brandsIndividualsSection}>
      <div className={brandsIndividualsContainer}>
        <h2>Empowering brands and individuals.</h2>
        <p>
          Prommoto bridges the gap between the physical and digital worlds
          through innovative OOH advertising aimed at providing users an easy
          way to make extra money, by simply doing what they’re already doing.
        </p>
      </div>
      <img src={graphPic} alt="graph" />
    </section>
  );
};

export default BrandsIndividuals;

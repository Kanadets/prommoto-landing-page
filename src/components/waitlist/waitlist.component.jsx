import React from "react";

import {
  joinWaitListSection,
  joinWaitListTextDiv,
} from "./waitlist.module.scss";

import bgImg from "assets/backCute.png";

const Waitlist = () => {
  return (
    <section className={joinWaitListSection}>
      <div className={joinWaitListTextDiv}>
        <h2>Join our early adopters waitlist</h2>
        <p>
          <span>A limited time offer</span> for the first 1000 brands: <br />{" "}
          Join the early adopter email list to be fostered.
        </p>
        <button>Get Early Access</button>
      </div>
      <img src={bgImg} alt="back" />
    </section>
  );
};

export default Waitlist;

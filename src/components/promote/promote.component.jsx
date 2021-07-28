import React from "react";
import { useMediaQuery } from "react-responsive";

import {
  promoteSection,
  headerText,
  textDivImg,
  imageDiv,
  textDiv,
} from "./promote.module.scss";

import leftImage from "assets/promoteLeftImg.png";
import rightImage from "assets/promoteRightImg.png";

const Promote = () => {
  const isTablet = useMediaQuery({
    query: "(max-width: 1025px)",
  });

  const isMob = useMediaQuery({
    query: "(max-width: 760px)",
  });

  return (
    <section className={promoteSection} id="brands">
      <div className={headerText}>
        <h2>Promote</h2>
        <p>Your brand</p>
      </div>
      <div className={textDivImg}>
        {isTablet ? (
          <>
            <div className={textDiv}>
              <h3>Promote your brand to reach your target.</h3>
              <p>
                Welcome to a new era of physical advertising. Have full control
                of your physical campaigns through our smart dashboard and rich
                data allowing you to reach new markets, physically, right from
                your digital device.
              </p>
            </div>
            <div className={imageDiv}>
              <img src={leftImage} alt="leftImg" />
            </div>
          </>
        ) : (
          <>
            <div className={imageDiv}>
              <img src={leftImage} alt="leftImg" />
            </div>
            <div className={textDiv}>
              <span>Grow &</span>
              <h3>Promote your brand to reach your target.</h3>
              <p>
                Welcome to a new era of physical advertising. Have full control
                of your physical campaigns through our smart dashboard and rich
                data allowing you to reach new markets, physically, right from
                your digital device.
              </p>
            </div>
          </>
        )}
      </div>
      <div className={textDivImg}>
        <div className={textDiv}>
          {!isTablet && <span>Grow &</span>}
          <h3>Move from a screen to the physical world</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>
        </div>
        <div className={imageDiv}>
          <img
            src={rightImage}
            alt="rightImg"
            style={{ margin: `${isMob ? "0 auto" : "0 0 0 auto"}` }}
          />
        </div>
      </div>
    </section>
  );
};

export default Promote;

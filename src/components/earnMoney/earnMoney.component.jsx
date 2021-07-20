import React, { useEffect, useState } from "react";

import {
  earnMoneySection,
  mainFixedBox,
  topTextBox,
  infoTextMainBox,
  infoTextBox,
  InfoText,
  infoTextActive,
  getEarlyAccess,
  unActive,
  infoImgBox,
  scrollController,
  scrollBar,
  scrollProgressBar,
} from "./earnMoney.module.scss";

import earnMoney1 from "assets/earnMoney1.svg";
import earnMoney2 from "assets/earnMoney2.svg";
import earnMoney3 from "assets/earnMoney3.png";

const EarnMoney = ({
  headerText,
  subHeaderText,
  slide1MainText,
  slide1MainSubText,
  slide1Img,
  slide2MainText,
  slide2MainSubText,
  slide2Img,
  slide3MainText,
  slide3MainSubText,
  slide3Img,
  mainColor,
  subColor,
  id,
}) => {
  const [topPos, setTopPos] = useState(0);
  const [elemHeight, setElemHeight] = useState(0);

  const [percentages, setPercentages] = useState(0);
  const [scrollProgress, setScrollProgress] = useState("33%");
  // const [activeSection, setActiveSection] = useState({
  //   makeMoney: true,
  //   ownSchedule: false,
  //   appLead: false,
  // });

  useEffect(() => {
    const scrollTopPos = document.getElementById(id);
    setTopPos(scrollTopPos.getBoundingClientRect().top - 505);
    setElemHeight(scrollTopPos.scrollHeight);
  }, []);

  //console.log(topPos, elemHeight);

  window.addEventListener("scroll", () => {
    const progress = Math.round(((window.scrollY - topPos) / elemHeight) * 100);

    if (window.scrollY > 2751) {
      setScrollProgress(`${progress}%`);
      setPercentages(progress);
    } else {
      setScrollProgress("33%");
    }
  });

  return (
    <section className={earnMoneySection} id={id}>
      <div className={mainFixedBox}>
        <div className={topTextBox}>
          <h2 style={{ color: `${mainColor}` }}>{headerText}</h2>
          <p>{subHeaderText}</p>
        </div>
        <div className={infoTextMainBox}>
          <div className={infoTextBox}>
            <div
              className={`${InfoText} ${
                percentages >= 0 && percentages < 66 ? infoTextActive : ""
              }`}
            >
              <h3>{slide1MainText}</h3>
              <p>{slide1MainSubText}</p>
            </div>
            <div
              className={`${InfoText} ${
                percentages >= 66 && percentages < 99 ? infoTextActive : ""
              }`}
            >
              <h3>{slide2MainText}</h3>
              <p>{slide2MainSubText}</p>
            </div>
            <div
              className={`${InfoText} ${
                percentages >= 99 ? infoTextActive : ""
              }`}
            >
              <h3>{slide3MainText}</h3>
              <p>{slide3MainSubText}</p>
            </div>
            <div className={getEarlyAccess}>
              <button
                style={{ backgroundColor: `${mainColor}`, color: subColor }}
                className={`${percentages >= 99 ? "" : unActive}`}
              >
                Get Early Access
              </button>
              <span className={`${percentages >= 99 ? unActive : ""}`}>
                Join early users list
              </span>
            </div>
          </div>
          <div className={infoImgBox}>
            <img
              src={`${
                percentages >= 0 && percentages < 66
                  ? slide1Img
                  : percentages >= 66 && percentages < 99
                  ? slide2Img
                  : slide3Img
              }`}
              alt="img"
            />
          </div>
          <div className={scrollController}>
            <div className={scrollBar}></div>
            <div className={scrollBar}></div>
            <div className={scrollBar}></div>
            <div
              className={scrollProgressBar}
              style={{
                height: `${scrollProgress}`,
                backgroundColor: `${mainColor}`,
              }}
            >
              <span
                style={{
                  backgroundColor: `${subColor ? subColor : mainColor}`,
                }}
              ></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarnMoney;

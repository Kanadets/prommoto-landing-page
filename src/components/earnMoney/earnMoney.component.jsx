import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

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
  headerTextTabMob,
  sections,
} from "./earnMoney.module.scss";

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
  scrollBg,
  borderColor,
  id,
}) => {
  const [topPos, setTopPos] = useState(0);
  const [elemHeight, setElemHeight] = useState(0);
  const [percentages, setPercentages] = useState(0);
  const [scrollProgress, setScrollProgress] = useState("33%");
  // const [activeImg, setActiveImg] = useState(slide1Img);
  // const [activeSection, setActiveSection] = useState({
  //   makeMoney: true,
  //   ownSchedule: false,
  //   appLead: false,
  // });

  // if (scrollProgress <= "33") {
  //   setActiveImg(slide1Img);
  // }

  // if (scrollProgress >= "33") {
  //   setActiveImg(slide2Img);
  // }

  // if (scrollProgress <= "99") {
  //   setActiveImg(slide3Img);
  // }

  const isTablet = useMediaQuery({
    query: "(max-width: 1025px)",
  });

  useEffect(() => {
    const scrollTopPos = document.getElementById(id);
    setTopPos(scrollTopPos.getBoundingClientRect().top - 505);
    setElemHeight(scrollTopPos.scrollHeight);
  }, [id]);

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
      {isTablet ? (
        <>
          <div className={headerTextTabMob}>
            <h2>{headerText}</h2>
            <p>{subHeaderText}</p>
          </div>
          <div className={sections}>
            <h3>{slide1MainText}</h3>
            <p>{slide1MainSubText}</p>
            <img
              src={slide1Img}
              alt=""
              style={{
                marginBottom: "100px",
              }}
            />
          </div>
          <div className={sections}>
            <h3>{slide2MainText}</h3>
            <p>{slide2MainSubText}</p>
            <img
              src={slide2Img}
              alt=""
              style={{
                marginBottom: "100px",
              }}
            />
          </div>
          <div className={sections}>
            <h3>{slide3MainText}</h3>
            <p>{slide3MainSubText}</p>
            <img
              src={slide3Img}
              alt=""
              style={{
                maxWidth: `${
                  slide3Img ===
                  "/prommoto-landing-page/static/media/earnMoney3.ea8a71c7.png"
                    ? "495px"
                    : ""
                }`,
              }}
            />
            <button>Get early access</button>
          </div>
        </>
      ) : (
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
                scrollBg
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
              {percentages <= 66 ? (
                <img src={`${slide1Img}`} alt="img" />
              ) : percentages >= 66 && percentages < 99 ? (
                <img src={`${slide2Img}`} alt="img" />
              ) : (
                <img src={`${slide3Img}`} alt="img" />
              )}
            </div>
            <div className={scrollController}>
              <div
                className={scrollBar}
                style={{
                  background: `${scrollBg}`,
                  borderBottom: `2px solid ${borderColor}`,
                }}
              ></div>
              <div
                className={scrollBar}
                style={{ background: `${scrollBg}` }}
              ></div>
              <div
                className={scrollBar}
                style={{
                  background: `${scrollBg}`,
                  borderTop: `2px solid ${borderColor}`,
                }}
              ></div>
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
      )}
    </section>
  );
};

export default EarnMoney;

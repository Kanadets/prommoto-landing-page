import React, { useEffect, useState, useCallback } from "react";
import { useMediaQuery } from "react-responsive";

import { CustomButton } from "./earnMoney.styles";

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
  spanCls,
  fadeIn,
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
  subBgColor,
  mainTextColor,
  subTextColor,
  scrollBg,
  borderColor,
  id,
  firstStepId,
  secondStepId,
  thirdStepId,
}) => {
  const [scrollProgress, setScrollProgress] = useState("33%");
  const [slide1Active, setSlide1Active] = useState(true);
  const [slide2Active, setSlide2Active] = useState(false);
  const [slide3Active, setSlide3Active] = useState(false);
  const [activeImg, setActiveImg] = useState(slide1Img);

  const isTablet = useMediaQuery({
    query: "(max-width: 1025px)",
  });

  const handleScroll = useCallback(() => {
    const firstStep = document.getElementById(`${firstStepId}`);
    const secondStep = document.getElementById(`${secondStepId}`);
    const thirdStep = document.getElementById(`${thirdStepId}`);

    if (firstStep.getBoundingClientRect().top <= document.body.scrollTop) {
      setSlide1Active(true);
      setSlide2Active(false);
      setSlide3Active(false);
      setActiveImg(slide1Img);
      setScrollProgress("33%");
    }

    if (
      firstStep.getBoundingClientRect().bottom <= document.body.scrollTop &&
      secondStep.getBoundingClientRect().top <= document.body.scrollTop
    ) {
      setSlide1Active(false);
      setSlide2Active(true);
      setSlide3Active(false);
      setActiveImg(slide2Img);
      setScrollProgress("66%");
    }

    // if (secondStep.getBoundingClientRect().bottom <= document.body.scrollTop) {
    //   setSlide1Active(false);
    //   setSlide2Active(false);
    //   setSlide3Active(true);
    //   setActiveImg(slide3Img);
    //   setScrollProgress("100%");
    // }

    if (secondStep.getBoundingClientRect().bottom <= document.body.scrollTop) {
      setSlide1Active(false);
      setSlide2Active(false);
      setSlide3Active(true);
      setActiveImg(slide3Img);
      setScrollProgress("100%");
    }
  }, [slide1Img, slide2Img, slide3Img, firstStepId, secondStepId, thirdStepId]);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <section className={earnMoneySection} id={id}>
      <div
        style={{
          height: "50vh",
          top: "0",
          position: "absolute",
          width: "100%",
        }}
        id={firstStepId}
      ></div>
      <div
        style={{
          height: "50vh",
          top: "30%",
          position: "absolute",
          width: "100%",
        }}
        id={secondStepId}
      ></div>
      <div
        style={{
          height: "50vh",
          top: "55%",
          position: "absolute",
          width: "100%",
        }}
        id={thirdStepId}
      ></div>
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
                className={`${InfoText} ${slide1Active && infoTextActive}`}
                scrollBg
              >
                <h3>{slide1MainText}</h3>
                <p>{slide1MainSubText}</p>
              </div>
              <div className={`${InfoText} ${slide2Active && infoTextActive}`}>
                <h3>{slide2MainText}</h3>
                <p>{slide2MainSubText}</p>
              </div>
              <div className={`${InfoText} ${slide3Active && infoTextActive}`}>
                <h3>{slide3MainText}</h3>
                <p>{slide3MainSubText}</p>
              </div>
              <div className={getEarlyAccess}>
                {slide3Active ? (
                  <CustomButton
                    mainBgColor={mainColor}
                    subBgColor={subBgColor}
                    mainTextColor={mainTextColor}
                    subTextColor={subTextColor}
                    // style={{
                    //   backgroundColor: `${mainColor}`,
                    //   color: subColor,
                    // }}
                  >
                    <span> Get Early Access</span>
                  </CustomButton>
                ) : (
                  <span className={spanCls}>Join early users list</span>
                )}
              </div>
            </div>
            <div className={infoImgBox}>
              <img src={`${activeImg}`} alt="img" className={fadeIn} />
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

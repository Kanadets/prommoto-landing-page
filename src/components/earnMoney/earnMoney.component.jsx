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

const EarnMoney = () => {
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
    const scrollTopPos = document.getElementById("scrollEarnSection");
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

  console.log(window.scrollY);

  return (
    <section className={earnMoneySection} id="scrollEarnSection">
      <div className={mainFixedBox}>
        <div className={topTextBox}>
          <h2>Earn Money</h2>
          <p>For Driving.</p>
        </div>

        {/*  */}
        <div className={infoTextMainBox}>
          <div className={infoTextBox}>
            <div
              className={`${InfoText} ${
                percentages >= 0 && percentages < 66 ? infoTextActive : ""
              }`}
            >
              <h3>Make money</h3>
              <p>
                State of the art way to make extra money. Simply by driving you
                can make up to <span>400$</span> per campaign for doing what you
                already do
              </p>
            </div>
            <div
              className={`${InfoText} ${
                percentages > 66 && percentages < 99 ? infoTextActive : ""
              }`}
            >
              <h3>Set your own scheldule</h3>
              <p>
                Ut quam in massa sagittis sapien, sit. Vitae risus, sollicitudin
                duis eget netus blandit mauris quis. Sed et a suspendisse
                tincidunt nibh.
              </p>
            </div>
            <div
              className={`${InfoText} ${
                percentages >= 99 ? infoTextActive : ""
              }`}
            >
              <h3>Let the app lead the way</h3>
              <p>
                Ut quam in massa sagittis sapien, sit. Vitae risus, sollicitudin
                duis eget netus blandit mauris quis. Sed et a suspendisse
                tincidunt nibh.
              </p>
            </div>
            <div className={getEarlyAccess}>
              <button className={`${percentages >= 99 ? "" : unActive}`}>
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
                  ? earnMoney1
                  : percentages >= 66 && percentages < 99
                  ? earnMoney2
                  : earnMoney3
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
              style={{ height: `${scrollProgress}` }}
            >
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarnMoney;

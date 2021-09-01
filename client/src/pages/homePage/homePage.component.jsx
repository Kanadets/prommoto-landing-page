import React from "react";

import Header from "components/header/header.component";
import PartnersLogos from "components/partnersLogos/partnersLogos.component";
import BrandsIndividuals from "components/brandsIndividuals/brandsIndividuals.component";
import EarnMoney from "components/earnMoney/earnMoney.component";
import Promote from "components/promote/promote.component";
import Waitlist from "components/waitlist/waitlist.component";
import GetInTouch from "components/getInTouch/getInTouch.component";

import earnGrow3 from "assets/growSlide3.png";
import earnMoney1 from "assets/earnMoney1.svg";
import earnMoney2 from "assets/earnMoney2.svg";
import earnMoney3 from "assets/earnMoney3.png";
import earnGrow1 from "assets/growSlide1.svg";
import earnGrow2 from "assets/growSlide2.png";

const HomePage = () => {
  return (
    <>
      <Header />
      <PartnersLogos />
      <BrandsIndividuals />
      <EarnMoney
        key={0}
        headerText="Earn Money"
        subHeaderText="For Driving."
        slide1MainText="Make money"
        slide1MainSubText={[
          "State of the art way to make extra money. Simply by driving you can make up to ",
          <span>400$</span>,
          " per campaign for doing what you already do",
        ]}
        slide1Img={earnMoney1}
        slide2MainText="Set your own scheldule"
        slide2MainSubText="Ut quam in massa sagittis sapien, sit. Vitae risus, sollicitudin
        duis eget netus blandit mauris quis. Sed et a suspendisse
        tincidunt nibh."
        slide2Img={earnMoney2}
        slide3MainText="Let the app lead the way"
        slide3MainSubText="Ut quam in massa sagittis sapien, sit. Vitae risus, sollicitudin
        duis eget netus blandit mauris quis. Sed et a suspendisse
        tincidunt nibh."
        slide3Img={earnMoney3}
        mainColor="#F6555A"
        subBgColor={"#ffe100"}
        mainTextColor="#fff"
        subTextColor="#0043ea"
        scrollBg={"rgba(246, 85, 90, 0.1)"}
        borderColor="#F6555A"
        id="forDrivers"
        firstStepId={"earnMoneyFirstStep"}
        secondStepId={"earnMoneySecondStep"}
        thirdStepId={"earnMoneyThirdStep"}
        // subColor="#fff"
      />
      <Promote />
      <Waitlist />
      <EarnMoney
        key={1}
        headerText="Earn & Grow"
        subHeaderText="For Installers."
        slide1MainText="Grow Your Market"
        slide1MainSubText="Hit larger and more diverse markets while lowering marketing costs."
        slide1Img={earnGrow1}
        slide2MainText="Plenty of orders"
        slide2MainSubText="Ut quam in massa sagittis sapien, sit. Vitae risus, sollicitudin duis eget netus blandit mauris quis. Sed et a suspendisse tincidunt nibh."
        slide2Img={earnGrow2}
        slide3MainText="You do you"
        slide3MainSubText="Ut quam in massa sagittis sapien, sit. Vitae risus, sollicitudin duis eget netus blandit mauris quis. Sed et a suspendisse tincidunt nibh."
        slide3Img={earnGrow3}
        mainColor="#FFE100"
        subColor="#0043EA"
        subBgColor={"#F6555A"}
        mainTextColor="#0043ea"
        subTextColor="#fff"
        scrollBg={"rgba(0, 67, 234, 0.1)"}
        borderColor="rgba(0, 67, 234, 0.54)"
        id="forInstallers"
        firstStepId={"growFirstStep"}
        secondStepId={"growSecondStep"}
        thirdStepId={"thirdStep"}
      />
      <GetInTouch />
    </>
  );
};

export default HomePage;

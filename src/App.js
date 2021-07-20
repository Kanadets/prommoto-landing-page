import React from "react";

import Navbar from "components/navbar/navbar.component";
import Header from "components/header/header.component";
import PartnersLogos from "components/partnersLogos/partnersLogos.component";
import BrandsIndividuals from "components/brandsIndividuals/brandsIndividuals.component";
import EarnMoney from "components/earnMoney/earnMoney.component";
import Promote from "components/promote/promote.component";
import Waitlist from "components/waitlist/waitlist.component";
import GetInTouch from "components/getInTouch/getInTouch.component";
import Footer from "components/footer/footer.component";

import earnMoney1 from "assets/earnMoney1.svg";
import earnMoney2 from "assets/earnMoney2.svg";
import earnMoney3 from "assets/earnMoney3.png";
import earnGrow1 from "assets/growSlide1.png";
import earnGrow2 from "assets/growSlide2.png";
import earnGrow3 from "assets/growSlide3.png";

import "./App.scss";

function App() {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Navbar />
      <Header />
      <PartnersLogos />
      <BrandsIndividuals />
      <EarnMoney
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
        id="scrollEarnSection"
        // subColor="#fff"
      />
      <Promote />
      <Waitlist />
      <EarnMoney
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
        id="scrollGrowSection"
      />
      <GetInTouch />
      <Footer />
    </>
  );
}

export default App;

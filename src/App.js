import React from "react";

import Navbar from "components/navbar/navbar.component";
import Header from "components/header/header.component";
import PartnersLogos from "components/partnersLogos/partnersLogos.component";
import BrandsIndividuals from "components/brandsIndividuals/brandsIndividuals.component";
import EarnMoney from "components/earnMoney/earnMoney.component";
import Promote from "components/promote/promote.component";

import "./App.scss";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <PartnersLogos />
      <BrandsIndividuals />
      <EarnMoney />
      <Promote />
    </>
  );
}

export default App;

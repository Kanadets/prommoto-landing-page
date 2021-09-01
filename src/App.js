import React from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "components/navbar/navbar.component";
import HomePage from "pages/homePage/homePage.component";
import TermsAndConditionsPage from "pages/termsAndConditionsPage/termsAndConditionsPage.component";
import Footer from "components/footer/footer.component";

import "./App.scss";

function App() {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          path="/terms-and-conditions"
          component={TermsAndConditionsPage}
        />
      </Switch>
      <Footer />
    </>
  );
}

export default App;

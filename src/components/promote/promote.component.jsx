import React from "react";

import { promoteSection, headerText, textDivImg } from "./promote.module.scss";

const Promote = () => {
  return (
    <section className={promoteSection}>
      <div className={headerText}>
        <h2></h2>
      </div>
      <div className={textDivImg}>
        <div></div>
        <div></div>
      </div>
      <div className={textDivImg}>
        <div></div>
        <div></div>
      </div>
    </section>
  );
};

export default Promote;

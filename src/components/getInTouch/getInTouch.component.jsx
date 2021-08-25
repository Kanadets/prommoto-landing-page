import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

import {
  getInTouchSection,
  getInTouchDiv,
  headerTextTouch,
  formTouchDiv,
  formDiv,
  progressForm,
  firstSpan,
  secondSpan,
  resetButton,
} from "./getInTouch.module.scss";

import backImg from "assets/contactBack.svg";

const initialFormState = {
  fullName: "",
  email: "",
  phoneNum: "",
};

const GetInTouch = () => {
  const [formStage, setFormStage] = useState(0);
  const [userCred, setUserCred] = useState(initialFormState);

  const isTablet = useMediaQuery({
    query: "(max-width: 1025px)",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormStage(formStage + 1);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserCred({ ...userCred, [name]: value });
  };

  return (
    <section className={getInTouchSection} id="investors">
      <img src={backImg} alt="back" />
      <div className={getInTouchDiv}>
        <div className={headerTextTouch}>
          {!isTablet && <span>For Investors</span>}
          <h2>Be Part of Prommoto</h2>
          {isTablet && <span>For Investors</span>}
          <p>
            Ut quam in massa sagittis sapien, sit. Vitae risus, sollicitudin
            duis eget netus blandit mauris quis. Sed et a suspendisse tincidunt
            nibh.
          </p>
        </div>
        <div className={formTouchDiv}>
          <form className={formDiv} onSubmit={(event) => handleSubmit(event)}>
            {formStage <= 2 ? (
              <>
                <p>
                  {formStage === 0
                    ? ["Let's start with your ", <b>first name.</b>]
                    : formStage === 1
                    ? ["What ", <b>email address</b>, " can we reach you at?"]
                    : formStage === 2
                    ? ["And Finaly your  ", <b>phone number?</b>]
                    : ""}
                </p>
                {formStage === 0 ? (
                  <input
                    name="fullName"
                    type="text"
                    placeholder="Full name"
                    value={userCred.fullName}
                    onChange={(event) => handleChange(event)}
                    required
                  />
                ) : formStage === 1 ? (
                  <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={userCred.email}
                    onChange={(event) => handleChange(event)}
                    required
                  />
                ) : formStage === 2 ? (
                  <input
                    name="phoneNum"
                    type="tel"
                    placeholder="Phone number"
                    value={userCred.phoneNum}
                    onChange={(event) => handleChange(event)}
                    required
                  />
                ) : (
                  ""
                )}

                {formStage <= 2 && (
                  <button>
                    <span>{formStage === 2 ? "Send" : "Next"}</span>
                  </button>
                )}
              </>
            ) : (
              <p
                style={{
                  fontWeight: "500",
                  fontSize: "60ox",
                  lineHeight: "150%",
                  textAlign: "center",
                }}
              >
                Thank you, {userCred.fullName}, for taking the time. We'll be in
                touch shortly.
              </p>
            )}
          </form>
          <div className={progressForm}>
            <span className={firstSpan}></span>
            <span
              className={secondSpan}
              style={{
                width: `${
                  formStage === 0 ? "33%" : formStage === 1 ? "66%" : "100%"
                }`,
              }}
            ></span>
            {formStage > 2 && (
              <button
                className={resetButton}
                onClick={(event) => {
                  event.preventDefault();

                  setFormStage(0);
                  setUserCred(initialFormState);
                }}
              >
                <span>Reset</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;

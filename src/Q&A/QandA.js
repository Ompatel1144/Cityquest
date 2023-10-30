import { React, useState } from "react";
import "../Q&A/QandA.css";
import Aboutusbackground from "../asset/aboutas.svg";
import Aboutphoto from "../asset/aboutas2.svg";
import { Container } from "@mui/material";
import arrowup from "../asset/arrowup.svg";
import arrowdown from "../asset/arrowdown.svg";
// import { useState } from "react";


export default function QandA() {
  const [arrow, setarrow] = useState(false);
  const [arrow1, setarrow1] = useState(false);
  const [arrow2, setarrow2] = useState(false);
  const [arrow3, setarrow3] = useState(false);

  return (
    <div className="aboutus" style={{ paddingTop: "90px" }}>
      <div className="aboutasimg">
        <div className="aboutastext">About Us</div>
      </div>
      <Container>
        <div className="about">
          <div className="aboutdetails">
            <h3
              style={{
                fontFamily: "Nunito",
                color: "#0070F0",
                fontWeight: "600",
              }}
            >
              About
            </h3>
            <h1 style={{ fontFamily: "Rubik" }}>In General</h1>
            <div className="historyp">
              <p style={{ fontFamily: "Nunito", color: "#545454" }}>
                Outside Escape Israel is a unique guided tour of a city that is
                automated. As a team, you will be tasked with solving riddles
                while following the story that guides you. Take your time to
                explore the area and use your mobile phone to receive all the
                necessary information, such as the route, story, riddles, hints,
                and solutions. You can begin the tour at any time that is
                convenient for you.
              </p>
            </div>
          </div>

          <div className="aboutphoto">
            <img src={Aboutphoto} className="historyphoto"></img>
          </div>
        </div>
      </Container>
      <div className="faq">
        <p style={{ fontFamily: "Rubik", fontSize: "40px", fontWeight: "700" }}>
          FAQ
        </p>
        <Container>
          <div className="faqbox">
            <div className="left">
              <div className="faqtext">
                <div className="box">
                  <div className="text" onClick={() => setarrow(!arrow)}>
                    <p className="fqaheading">How long is the walking?</p>

                    {arrow ? (
                      <img src={arrowup} alt="down"></img>
                    ) : (
                      <img src={arrowdown} alt="down"></img>
                    )}
                  </div>
                  {arrow ? (
                    <p className="fqadetails">
                      You have the flexibility to begin the escape at any time
                      you prefer by accessing the provided link.
                    </p>
                  ) : null}
                </div>
              </div>
              <div className="faqtext">
                <div className="box">
                  <div className="text" onClick={() => setarrow1(!arrow1)}>
                    <p className="fqaheading">How long is the walking?</p>

                    {arrow1 ? (
                      <img src={arrowup} alt="down"></img>
                    ) : (
                      <img src={arrowdown} alt="down"></img>
                    )}
                  </div>
                  {arrow1 ? (
                    <p className="fqadetails">
                      You have the flexibility to begin the escape at any time
                      you prefer by accessing the provided link.
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="right">
              <div className="faqtext">
                <div className="box">
                  <div className="text" onClick={() => setarrow2(!arrow2)}>
                    <p className="fqaheading">How long is the walking?</p>

                    {arrow2 ? (
                      <img src={arrowup} alt="down"></img>
                    ) : (
                      <img src={arrowdown} alt="down"></img>
                    )}
                  </div>
                  {arrow2 ? (
                    <p className="fqadetails">
                      You have the flexibility to begin the escape at any time
                      you prefer by accessing the provided link.
                    </p>
                  ) : null}
                </div>
              </div>
              <div className="faqtext">
                <div className="box">
                  <div className="text" onClick={() => setarrow3(!arrow3)}>
                    <p className="fqaheading">How long is the walking?</p>

                    {arrow3 ? (
                      <img src={arrowup} alt="down"></img>
                    ) : (
                      <img src={arrowdown} alt="down"></img>
                    )}
                  </div>
                  {arrow3 ? (
                    <p className="fqadetails">
                      You have the flexibility to begin the escape at any time
                      you prefer by accessing the provided link.
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

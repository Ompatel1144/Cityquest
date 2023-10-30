import React from "react";
import "./Contact.css";
import Contactbackground from "../asset/aboutas.svg";
import { Container } from "@mui/material";
// import contactimg from "../asset/contactimg.jpg";
import logo from "../asset/cityquestlogo.svg";
// import contactimg from "../asset/contactimg.svg"
export default function Contact() {
  return (
    <div className="contact" style={{ paddingTop: "90px" }} >
      <div className="contactimg">
        <div className="contacttext">Contact us</div>
      </div>
      <Container>
        <div className="contactpart">
          <div className="contactleftpart">
            {/* <img src={contactimg} alt="contactimg" className="img"></img> */}
            <div className="betweencontact">
              <img
                src={logo}
                alt="logo"
                style={{
                  //   position: "absolute",
                  top: "0px",
                  left: "0px",
                  //   backgroundColor: "red",
                  width: "40%",
                }}
              ></img>
              <p
                style={{
                  color: "white",
                  fontFamily: "rubik",
                  fontSize: "20px",
                }}
              >
                Easy to contact us and get response soon.
              </p>
            </div>
          </div>
          <div className="contactrightpart">
            <div className="contact2">
              <p
                style={{
                  fontFamily: "rubik",
                  fontWeight: "600",
                  fontSize: "30px",
                }}
              >
                Contact us
              </p>
              <p
                style={{
                  fontFamily: "rubik",
                  color: "#545454",
                }}
              >
                Feel free to contact us with any questions or concerns. You can
                use the form on our website or email us directly. We appreciate
                your interest and look forward to hearing from you.
              </p>
            </div>
            <form
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div className="input">
                <div className="focus ">
                  <input
                    type="text"
                    className="name"
                    // placeholder="Enter name"
                    required
                  ></input>
                  <label>Enter Name</label>
                </div>
                <div className="focus ">
                  <input
                    type="text"
                    className="name"
                    maxLength="10"
                    required
                  ></input>
                  <label>Enter phone</label>
                </div>
                <div className="focus ">
                  <input type="e-mail" className="name" required></input>
                  <label>Enter email address</label>
                </div>
                <div className="focus ">
                  <input type="text" className="name2" required></input>
                  <label>Enter your message</label>
                </div>
                <input type="submit" className="submit"></input>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
}

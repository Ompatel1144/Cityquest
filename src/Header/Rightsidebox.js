import React from "react";
import facebook from "../asset/facebook.svg";
import instagram from "../asset/instagram.svg";
import "./Rightsidebox.css";
export default function Rightsidebox() {
  return (
    <>
      <div className="rightbox">
        <img
          src={facebook}
          style={{
            padding: "0px 5px 0px 5px",
          }}
          alt="fb"
        ></img>
        <span>|</span>
        <img
          src={instagram}
          style={{
            padding: "0px 5px 0px 5px",
          }}
          alt="insta"
        ></img>
      </div>
    </>
  );
}

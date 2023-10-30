import React from "react";
import { Link } from "react-router-dom";
import background from "../asset/header.png";
import cloud from "../asset/cloud.svg";
import pictureone from "../asset/homepictureone.svg";
import dot from "../asset/dot.svg";
import airplane from "../asset/airplane.svg";
import toyplane from "../asset/toyplane.svg";
import picturetwo from "../asset/homepicturetwo.svg";
import picturethree from "../asset/homepicturethree.svg";
import Button from "@mui/material/Button";
import cityimage from "../asset/explorecityimage.svg";
import cube from "../asset/cube.svg";
import choosecity from "../asset/building.svg";
import mail from "../asset/mail.svg";
import compas from "../asset/timer.svg";
import outdoor from "../asset/outdoor.svg";
import historical from "../asset/historicalplace.svg";
import msg from "../asset/msg.svg";
import icons from "../asset/icons.svg";
import dropone from "../asset/dropicon1.svg";
import droptwo from "../asset/dropicon2.svg";
import dropthree from "../asset/dropicon3.svg";
import dropfour from "../asset/dropicon4.svg";
import dropfive from "../asset/dropicon5.svg";
import dropsix from "../asset/dropicon6.svg";
import "./Home.css";
import { Container } from "@mui/material";

export default function Home() {
  return (
    <div style={{ paddingTop: "90px" }}>
      {/* <div style={{position:"relative"}}>
        <div style={{ position: "fixed", zIndex: "100" }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          temporibus accusamus earum nesciunt eum est, optio cum? Corporis
          doloribus harum aperiam. Veniam cupiditate nulla commodi voluptate
          architecto laborum illo delectus minus repudiandae, deleniti maiores
          numquam sapiente temporibus explicabo ipsum, cumque non eaque eligendi
          perferendis incidunt recusandae? Porro totam, aut iure odit ex ab
          fugit ipsam, explicabo, iusto aliquid cumque quod culpa quas! Saepe
          quis reprehenderit vitae non? Reiciendis nulla totam modi? Facere,
          laborum
        </div>z
      </div> */}
      <div className="homebackground">
        <div className="cloud">
          <img src={cloud} alt="cloud"></img>
        </div>
        <div className="cloud2">
          <img src={cloud} alt="cloud2"></img>
        </div>
        <div className="airplane">
          <img src={airplane} alt="airplane"></img>
        </div>
        <div className="toyplane">
          <img src={toyplane} alt="toyplane"></img>
        </div>
        <div className="toyplane2">
          <img src={toyplane} alt="toyplane2"></img>
        </div>
        <div className="cloud3">
          <img src={cloud} alt="cloud3"></img>
        </div>
        {/* <div style={{position:"relative"}}> */}
        {/* <div className="one1">
          <div className="one">
            <img src={dot} alt="dotimage" className="dot1"></img>
            <img src={pictureone} alt="cloud" className="pic1"></img>
          </div>
          <div
            className="backgroundtext"
            style={{
              position: "relative",
              width: "400px",
              height: "300px",
              backgroundColor: "green",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <p>LET'S FEEL Place</p>
            <span>Discover Israel A Unique Way.</span>
            <span>
              Experience the history and culture of Israeli cities through our
              challenging outdoor adventures.
            </span>
          </div>
        </div> */}
        <div className="main">
          <div className="one">
            <img src={dot} alt="dotimage" className="dotimg"></img>
            <img src={pictureone} alt="homepageone" className="homeone"></img>
          </div>
          <div className="two">
            <p
              style={{
                fontFamily: "Nunito",
                color: "#0070F0",
                fontWeight: "600",
                margrin: "0px",
              }}
            >
              LET'S FEEL PLACE
            </p>
            <h1
              style={{ fontFamily: "Rubik", fontSize: "50px", margin: "0px" }}
            >
              Discover Israel A Unique Way.
            </h1>
            <span style={{ fontFamily: "Nunito", color: "#545454" }}>
              Experience the history and culture of Israeli cities through our
              challenging outdoor adventures.
            </span>
            <Link to={"/explorecity"}>
              <Button
                variant="contained"
                style={{
                  fontFamily: "Nunito",
                  borderRadius: "20px",
                  marginTop: "30px",
                }}
              >
                Get Start
              </Button>
            </Link>
          </div>
          <div className="three">
            <img src={dot} alt="dotimage" className="dotimg2"></img>
            <img src={picturetwo} alt="homepagetwo" className="hometwo"></img>
            <img
              src={picturethree}
              alt="homeimagethree"
              className="homethree"
            ></img>
          </div>
        </div>
      </div>
      <Container>
        <div className="explorecity">
          <div className="images">
            <img src={cityimage} alt="city" className="cityphoto"></img>
            <img src={cube} alt="cube" className="cubesphoto"></img>
          </div>
          <div className="texts">
            <span
              style={{
                fontFamily: "Nunito",
                color: "#0070F0",
                fontWeight: "600",
              }}
            >
              FIRST OF ALL
            </span>
            <span style={{ fontFamily: "Rubik", fontSize: "500" }}>
              <h1>Explore the city and solve riddles.</h1>
            </span>
            <span style={{ fontFamily: "Nunito", color: "#545454" }}>
              Our interactive puzzles and riddles allow you to explore Israel in
              a way that is both fun and challenging. Whether you are a tourist
              or a local, our engaging outdoor adventures offer something new to
              discover.
            </span>
          </div>
        </div>
      </Container>
      <div className="backgroundblue">
        <div className="background2">
          <div className="blur1">
            <img
              src={choosecity}
              alt="choosecity"
              style={{ marginTop: "30px" }}
            ></img>
            <h3 style={{ fontFamily: "Rubik" }}>Choose City</h3>
            <div className="text">
              <p style={{ fontFamily: "Nunito" }}>
                Choose a city from our large section. Each City has a unique
                cover story, challenging riddles and hot recommendations
              </p>
            </div>
          </div>
          <div className="blur2">
            <img src={mail} alt="choosecity"></img>
            <h3 style={{ fontFamily: "Rubik" }}>Check your email</h3>
            <div className="text" style={{ display: "block" }}>
              <p style={{ fontFamily: "Nunito" }}>
                As soon as you complete the purchase, you will receive the link
                to game by email
              </p>
            </div>
          </div>
          <div className="blur3">
            <img src={compas} alt="choosecity"></img>
            <h3 style={{ fontFamily: "Rubik" }}>Start To Explore!</h3>
            <div className="text">
              <p style={{ fontFamily: "Nunito" }}>
                All you need is your phone. You can start whenever you want! You
                can take breaks and don’t forget to have fun!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bgoutdoor">
        <div className="text2">
          <h3
            style={{
              fontFamily: "Nunito",
              color: "#0070F0",
              fontWeight: "600",
            }}
          >
            NOT TO MENTION
          </h3>
          <h1 style={{ fontFamily: "Rubik" }}>Unique outdoor experience.</h1>
          <div className="outdoorp">
            <p style={{ fontFamily: "Nunito", color: "#545454" }}>
              Outside Escape offers a unique and exciting outdoor experience
              that you won't find anywhere else, allowing you to explore Israeli
              cities in a new way. Use your phone to solve clues and explore the
              city on foot.
              <pre
                style={{
                  fontSize: "15px",
                }}
              >
                Start at any time you want!
              </pre>
            </p>
          </div>
        </div>
        <div className="outdoorimage">
          <img src={outdoor} className="outdoorphoto"></img>
        </div>
      </div>
      <div className="history">
        <div className="historyimage">
          <img src={historical} className="historyphoto"></img>
        </div>
        <div className="text3">
          <h3
            style={{
              fontFamily: "Nunito",
              color: "#0070F0",
              fontWeight: "600",
            }}
          >
            And let's not forget
          </h3>
          <h1 style={{ fontFamily: "Rubik" }}>
            Learn about historical anecdotes.
          </h1>
          <div className="historyp">
            <p style={{ fontFamily: "Nunito", color: "#545454" }}>
              We offer a unique way to discover Israel that allows you to
              connect with the culture and history of the country. Our
              adventure-based approach will leave you with unforgettable
              memories.
            </p>
          </div>
        </div>
      </div>
      <div className="messagepart">
        <div className="msg">
          <img src={msg} alt="msg" className="msgicon"></img>
        </div>
        <div className="icons">
          <img src={icons} alt="icons" className="icon"></img>
        </div>
      </div>
      <div className="footer">
        <img src={dropone} alt="memberone" className="onedrop"></img>
        <img src={droptwo} alt="membertwo" className="twodrop"></img>
        <img src={dropthree} alt="memberthree" className="threedrop"></img>
        <img src={dropfour} alt="memberfour" className="fourdrop"></img>
        <img src={dropfive} alt="memberfive" className="fivedrop"></img>
        <img src={dropsix} alt="membersix" className="sixdrop"></img>
        <div className="middlebox">
          <div className="footertext">
            <p
              style={{
                fontFamily: "Nunito",
                color: "#0070F0",
                fontWeight: "600",
              }}
            >
              JoinUs
            </p>
            <span>
              <h1>
                <p style={{ fontFamily: "Rubik" }}>
                  Join <br />
                  Outside Escape for an adventure unlike any other.
                </p>
              </h1>
            </span>
            <Link to={"/explorecity"}>
              <Button
                variant="contained"
                style={{ fontFamily: "Nunito", borderRadius: "20px" }}
              >
                Get Start
              </Button>
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="footerline">
        <p style={{ fontFamily: "Nunito" }}>© Copyright 2021 by City Escape</p>
      </div> */}
    </div>
  );
}

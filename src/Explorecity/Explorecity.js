import React from "react";
import "./Explorecity.css";
import explorebackground from "../asset/explorecitypagebg.svg";
import { Container } from "@mui/material";
import Gamecard from "./Gamecard";
import img1 from "../asset/Gamesimages/card1.svg";
import img2 from "../asset/Gamesimages/card2.svg";
import img3 from "../asset/Gamesimages/card3.svg";
import img4 from "../asset/Gamesimages/card4.svg";

export default function Explorecity(props) {
  //   const item = {
  //     id: 1,
  //     img: img1,
  //     title: "Puzzle Game",
  //     price: "89.00",
  //     mrp: "126.00",
  //   };

  const carddata = [
    {
      id: 1,
      img: img1,
      title: "Puzzle Game",
      price: 99.0,
      mrp: 120.0,
    },
    {
      id: 2,
      img: img2,
      title: "Puzzle Game",
      price: 99.0,
      mrp: 120.0,
    },
    {
      id: 3,
      img: img3,
      title: "Puzzle Game",
      price: 99.0,
      mrp: 120.0,
    },
    {
      id: 4,
      img: img4,
      title: "Puzzle Game",
      price: 99.0,
      mrp: 120.0,
    },

    {
      id: 5,
      img: img1,
      title: "Puzzle Game",
      price: 99.0,
      mrp: 120.0,
    },
    {
      id: 6,
      img: img2,
      title: "Puzzle Game",
      price: 99.0,
      mrp: 120.0,
    },
    {
      id: 7,
      img: img3,
      title: "Puzzle Game",
      price: 99.0,
      mrp: 120.0,
    },
    {
      id: 8,
      img: img4,
      title: "Puzzle Game",
      price: 99.0,
      mrp: 120.0,
    },
    {
      id: 9,
      img: img1,
      title: "Puzzle Game",
      price: 99.0,
      mrp: 120.0,
    },
    {
      id: 10,
      img: img2,
      title: "Puzzle Game",
      price: 99.0,
      mrp: 120.0,
    },
  ];
  // const items = carddata.map((item,index) => (
  //   console.log(item,'jjjj')
  // ));

  return (
    <div style={{ paddingTop: "90px" }}>
      {props.data}

      <div className="explorecitypage" >
        <div className="explorecityimg">
          <img
            src={explorebackground}
            alt="background"
            style={{ width: "-webkit-fill-available", position: "relative" }}
          ></img>
          <div className="exploretext">Explore The City</div>
        </div>
        <Container>
          <div className="games">
            <p
              style={{
                fontFamily: "Rubik",
                fontSize: "20px",
                fontWeight: "700",
              }}
            >
              Israel
            </p>
            <hr style={{ border: "2px solid gray" }} />
            <div className="cardline">
              {carddata.map((item, index) => (
                <Gamecard item={item} />
              ))}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

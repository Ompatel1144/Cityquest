import { React, useState } from "react";
import "./Gamedetails.css";
import { Container } from "@mui/material";
import cardimg from "../asset/gamedetails.svg";
import mrp from "../asset/Gamesimages/mrp.svg";
import price from "../asset/Gamesimages/price.svg";
import Button from "@mui/material/Button";
import minus from "../asset/minus.svg";
import plus from "../asset/plus.svg";
import { Link, useParams } from "react-router-dom";
import img1 from "../asset/Gamesimages/card1.svg";
import img2 from "../asset/Gamesimages/card2.svg";
import img3 from "../asset/Gamesimages/card3.svg";
import img4 from "../asset/Gamesimages/card4.svg";

export default function Gamedetails(props) {
  const [count, setCount] = useState(0);
  const {id} = useParams();
  // console.log(id, "hloooo");
  const carddata = [
    {
      id: 1,
      img: cardimg,
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
      img:cardimg,
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
      img: cardimg,
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
  const result = carddata.find((data) => data.id === parseInt(id));
  // console.log(result, "details");
  // console.log(result.title,"sdfhdff")
  return (
    <div style={{paddingTop:"90px"}}>
      <Container>
        <div className="gamedetails">
          <div className="gameupperpart">
            <div className="cardimg">
              <img src={result.img} alt="cardimg" className="cardphoto"></img>
            </div>
            <div className="puzzledetails">
              <p
                style={{
                  fontFamily: "Rubik",
                  fontWeight: "700",
                  fontSize: "20px",
                }}
              >
                {result.title}
              </p>
              <p
                style={{
                  fontFamily: "Rubik",
                  color: "#545454",
                  lineHeight: "30px",
                }}
              >
                Operation Mossad! In this thrilling game, you will embark on a
                mission as an undercover agent joining the prestigious Mossad
                agency. Your expertise and quick thinking are needed to resolve
                an emergency situation unfolding in Tel Aviv.
              </p>
              <div className="pricedetails">
                <img src={price} alt="mrp"></img>
                <p
                  style={{
                    fontFamily: "Rubik",
                    fontSize: "20px",
                    fontWeight: "700",
                    color: "#2182AC",
                  }}
                >
                  {result.price}
                </p>
                <img src={mrp}></img>
                <p
                  style={{
                    fontFamily: "Rubik",
                    fontSize: "20px",
                    fontWeight: "700",
                    color: "grey",
                    textDecoration: "line-through",
                  }}
                >
                {result.mrp}
                </p>
              </div>
              <div className="maxminbox">
                <div className="circle">
                  <img
                    src={minus}
                    alt="minus"
                    onClick={() => {
                      setCount(Math.max(count - 1, 0));
                    }}
                  ></img>
                  <p
                    style={{
                      fontFamily: "Rubik",
                      fontSize: "20px",
                      fontWeight: "700",
                      margin: "10px",
                    }}
                  >
                    {count}
                  </p>
                  <img
                    src={plus}
                    alt="minus"
                    onClick={() => {
                      setCount(count + 1);
                    }}
                  ></img>
                </div>
              </div>
              <div className="button">
                <Link to="/explorecity/addtocard">
                  <Button
                    // onClick={notify}
                    variant="contained"
                    style={{
                      fontFamily: "poppins",
                      borderRadius: "15px",
                      background: "#2182AC",
                      textTransform: "none",
                      width: "250px",
                      height: "40px",
                      borderRadius: "20px",
                    }}
                  >
                    Add to bag
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <hr style={{ width: "98%" }} />
          <div className="gamedatailstext">
            <p
              style={{
                fontFamily: "Rubik",
                fontWeight: "700",
                fontSize: "20px",
              }}
            >
              Game Details
            </p>
            <p
              style={{
                fontFamily: "Rubik",
                color: "#545454",
                lineHeight: "30px",
              }}
            >
              <ui>
                <li>
                  Welcome to the Tel Aviv Adventure: Operation Mossad! In this
                  thrilling game, you will embark on a mission as an undercover
                  agent joining the prestigious Mossad agency. Your expertise
                  and quick thinking are needed to resolve an emergency
                  situation unfolding in Tel Aviv.
                </li>
                <li>
                  As you navigate through the bustling streets of Tel Aviv, you
                  will encounter iconic historic sites and hidden gems. Immerse
                  yourself in the vibrant culture, rich history, and fascinating
                  stories of this captivating city while unraveling the
                  mysteries and challenges that lie ahead.
                </li>
                <li>
                  Your mission will take you on a captivating journey spanning
                  approximately 2.5 kilometers. Along the way, you will explore
                  renowned landmarks, uncover lesser-known secrets, and receive
                  invaluable recommendations for the best local spots to visit.
                </li>
                <li>
                  Get ready to put your problem-solving skills to the test as
                  you decipher clues, solve riddles, and overcome obstacles.
                  Your actions and decisions will shape the outcome of the
                  mission, so be prepared for unexpected twists and turns.
                </li>
                <li>
                  Remember, time is of the essence! As you progress through the
                  game, you'll be accompanied by a ticking timer, adding an
                  extra layer of excitement and urgency to your mission.
                </li>
                <li>
                  Whether you're a local or a first-time visitor to Tel Aviv,
                  this adventure promises to provide a fresh perspective on the
                  city, allowing you to explore its history, culture, and hidden
                  treasures in a unique and interactive way.
                </li>
                <li>
                  Prepare to unleash your inner detective and embark on an
                  unforgettable journey through Tel Aviv. Join Operation Mossad
                  and help save the day while discovering the wonders of this
                  extraordinary city!
                </li>
              </ui>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

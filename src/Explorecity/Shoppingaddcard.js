import { React, useState } from "react";
import "./Shoppingaddcard.css";
import addgameimg from "../asset/gamedetails.svg";
import price from "../asset/Gamesimages/price.svg";
import mrp from "../asset/Gamesimages/mrp.svg";
import minus from "../asset/minus.svg";
import plus from "../asset/plus.svg";
import deletes from "../asset/delete.svg";
import { display } from "@mui/system";
// import img1 from "../asset/Gamesimages/card1.svg";
// import img2 from "../asset/Gamesimages/card2.svg";
// import img3 from "../asset/Gamesimages/card3.svg";
// import img4 from "../asset/Gamesimages/card4.svg";
// import { Link, useParams } from "react-router-dom";

export default function Shoppingaddcard() {
  const [count, setCount] = useState(1);
  const [isVisible, setIsVisible] = useState(true);
  const handleDelete = () => {
    setIsVisible(false);
  };

  // const {id} = useParams();
  // console.log(id, "hloooo");

  // const carddata = [
  //   {
  //     id: 1,
  //     img: img1,
  //     title: "Puzzle Game",
  //     price: 99.0,
  //     mrp: 120.0,
  //   },
  //   {
  //     id: 2,
  //     img: img2,
  //     title: "Puzzle Game",
  //     price: 99.0,
  //     mrp: 120.0,
  //   },
  //   {
  //     id: 3,
  //     img: img3,
  //     title: "Puzzle Game",
  //     price: 99.0,
  //     mrp: 120.0,
  //   },
  //   {
  //     id: 4,
  //     img: img4,
  //     title: "Puzzle Game",
  //     price: 99.0,
  //     mrp: 120.0,
  //   },
  //   {
  //     id: 5,
  //     img: img1,
  //     title: "Puzzle Game",
  //     price: 99.0,
  //     mrp: 120.0,
  //   },
  //   {
  //     id: 6,
  //     img: img2,
  //     title: "Puzzle Game",
  //     price: 99.0,
  //     mrp: 120.0,
  //   },
  //   {
  //     id: 7,
  //     img: img3,
  //     title: "Puzzle Game",
  //     price: 99.0,
  //     mrp: 120.0,
  //   },
  //   {
  //     id: 8,
  //     img: img4,
  //     title: "Puzzle Game",
  //     price: 99.0,
  //     mrp: 120.0,
  //   },
  //   {
  //     id: 9,
  //     img: img1,
  //     title: "Puzzle Game",
  //     price: 99.0,
  //     mrp: 120.0,
  //   },
  //   {
  //     id: 10,
  //     img: img2,
  //     title: "Puzzle Game",
  //     price: 99.0,
  //     mrp: 120.0,
  //   },
  // ];
  // const results = carddata.find((datas) => datas.id === parseInt(id));
  // console.log(results, "sdffdd");
  return (
    <div
      className="shoppingaddcard"
      style={{ display: isVisible ? "block" : "none" }}
    >
      <div className="addgamecardbox">
        <div className="allitemswithprice">
          <img src={addgameimg} alt="image" className="picture"></img>
          <div className="pricedetails1">
            <p className="gamename">Puzzle Game</p>
            <div className="pricedetails2">
              <img src={price} alt="mrp"></img>
              <p className="number">99.00</p>
              <img src={mrp}></img>
              <p className="number2">120.00</p>
            </div>
            <div className="maxminbox">
              <div className="circle">
                <img
                  src={minus}
                  alt="minus"
                  onClick={() => {
                    setCount(Math.max(count - 1, 1));
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
          </div>
        </div>
        <div className="delete" onClick={handleDelete}>
          <img src={deletes} alt="delete" style={{ width: "30px" }}></img>
        </div>
      </div>
    </div>
  );
}

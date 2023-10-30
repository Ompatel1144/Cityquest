import { React, useState } from "react";
import "./Gamecard.css";
// import card1 from "../asset/Gamesimages/card1.svg";
import money from "../asset/Gamesimages/price.svg";
import mrp from "../asset/Gamesimages/mrp.svg";
import Button from "@mui/material/Button";
import toast, { ToastBar, Toaster } from "react-hot-toast";
import Gamedetails from "./Gamedetails";
import { Link } from "react-router-dom";
import Header from "../Header/Header";

export default function Gamecard(props) {
  // console.log(props.item.id, "hlooo");
  // const one=props.item.id
  // console.log(one,"sdhgjfd")

  const [number, setnumber] = useState(0);
  const notify = () => toast.success("Add Item Successfully!");


  return (
    <>
      {/* <Header data={number} /> */}

      <div className="cardline2" >
        <Link
          to={`/explorecity/details/${props.item.id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <div className="card">
            <img src={props.item.img} alt="image1" className="imageone"></img>
            <div className="carddetails">
              <p
                style={{
                  fontFamily: "Rubik",
                  fontSize: "20px",
                  fontWeight: "700",
                  marginBottom: "0px",
                }}
              >
                {props.item.title}
              </p>
              <div className="moneyitem">
                <img src={money} alt="money" className="moneyicon"></img>
                <p
                  style={{
                    fontFamily: "Rubik",
                    fontSize: "20px",
                    fontWeight: "700",
                    color: "#2182AC",
                  }}
                >
                  {props.item.price}
                </p>
                <div className="mrp">
                  <img src={mrp} alt="money" className="moneyicon2"></img>
                  <p
                    style={{
                      fontFamily: "Rubik",
                      fontSize: "20px",
                      fontWeight: "700",
                      color: "grey",
                      textDecoration: "line-through",
                    }}
                  >
                    {props.item.mrp}
                  </p>
                </div>
              </div>
              {/* <Link to="/explorecity/addtocard"> */}
            </div>
          </div>
        </Link>
        <Button
          onClick={() => {
            setnumber(number + 1);
            notify();
          }}
          variant="contained"
          style={{
            fontFamily: "poppins",
            borderRadius: "15px",
            background:
              "var(--4, linear-gradient(45deg, #3077A1 0%, #314989 100%))",
            textTransform: "none",
            width: "100%",
          }}
        >
          Add to Card
        </Button>
        {number}
        {/* </Link>  */}
        <Toaster />
      </div>
    </>
  );
}

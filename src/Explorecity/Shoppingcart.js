import React from "react";
import "./Shoppingcart.css";
import { Container } from "@mui/material";
import Shoppingaddcard from "./Shoppingaddcard";
import Button from "@mui/material/Button";
import mrp from "../asset/Gamesimages/mrp.svg";
import redmrp from "../asset/Gamesimages/redmrp.svg";
import paypal from "../asset/Gamesimages/logos_paypal.svg";

export default function Shoppingcart() {
  return (
    <div className="shoppingcart" style={{paddingTop:"90px"}}>
      <div className="shoppingcartimg">
        <div className="shoppingcarttext">Shopping Cart</div>
      </div>
      <Container style={{ marginTop: "20px" }}>
        <div className="shopcard">
          <div className="gameadd2">
            <Shoppingaddcard/>
          </div>
          <div className="payment">
            <div className="paymentcard">
              <p
                style={{
                  fontFamily: "Rubik",
                  fontWeight: "500",
                  fontSize: "20px",
                }}
              >
                Coupon Code
              </p>
              <div className="btntext">
                <input
                  type="text"
                  className="couponcode"
                  placeholder="Enter coupon code"
                ></input>
                <Button
                  variant="contained"
                  style={{
                    fontFamily: "nunito",
                    borderRadius: "10px",
                    background: "#2182AC",
                    textTransform: "none",
                    width: "20px",
                    height: "30px",
                    position: "absolute",
                    right: "20px",
                    top: "5px",
                  }}
                >
                  Apply
                </Button>
              </div>
              <p
                style={{
                  fontFamily: "Rubik",
                  fontWeight: "500",
                  fontSize: "20px",
                }}
              >
                Cart Summary
              </p>
              <hr />
              <div className="total">
                <div className="first">
                  <p
                    style={{
                      fontFamily: "Rubik",
                      fontWeight: "300",
                      fontSize: "20px",
                      color: "#6A6A6A",
                    }}
                  >
                    Total saving
                  </p>
                  <div className="pricetext1">
                    <img src={mrp} alt="price"></img>
                    <p
                      style={{
                        fontFamily: "Rubik",
                        fontWeight: "500",
                        fontSize: "20px",
                      }}
                    >
                      99.00
                    </p>
                  </div>
                </div>
                <div className="first">
                  <p
                    style={{
                      fontFamily: "Rubik",
                      fontWeight: "300",
                      fontSize: "20px",
                      color: "#6A6A6A",
                    }}
                  >
                    Sub total
                  </p>
                  <div className="pricetext1">
                    <img src={mrp} alt="price"></img>
                    <p
                      style={{
                        fontFamily: "Rubik",
                        fontWeight: "500",
                        fontSize: "20px",
                      }}
                    >
                      399.00
                    </p>
                  </div>
                </div>
                <div className="first">
                  <p
                    style={{
                      fontFamily: "Rubik",
                      fontWeight: "300",
                      fontSize: "20px",
                      color: "#6A6A6A",
                    }}
                  >
                    Applied Coupon
                  </p>
                  <div className="pricetext1">
                    <img src={redmrp} alt="price"></img>
                    <p
                      style={{
                        fontFamily: "Rubik",
                        fontWeight: "500",
                        fontSize: "20px",
                        color: "#FF5B40",
                      }}
                    >
                      20.00
                    </p>
                  </div>
                </div>
                <hr />
                <div className="first">
                  <p
                    style={{
                      fontFamily: "Rubik",
                      fontWeight: "300",
                      fontSize: "20px",
                      color: "#6A6A6A",
                    }}
                  >
                    Total Amount
                  </p>
                  <div className="pricetext1">
                    <img src={mrp} alt="price"></img>
                    <p
                      style={{
                        fontFamily: "Rubik",
                        fontWeight: "500",
                        fontSize: "20px",
                      }}
                    >
                      499.00
                    </p>
                  </div>
                </div>
              </div>
              <Button
                variant="contained"
                style={{
                  fontFamily: "rubik",
                  fontWeight:"500",
                  fontSize:"20px",
                  borderRadius: "30px",
                  background: "#2182AC",
                  textTransform: "none",
                  width: "auto",
                  height: "50px",
                }}
              >
                Continue to<img src={paypal} alt="paypal"></img> Pay Pal
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../src/Header/Header";
import Home from "./Home/Home";
import Explorecity from "./Explorecity/Explorecity";
import Footer from "./Footer/Footer";
import QandA from "./Q&A/QandA";
import Contact from "./Contact/Contact";
import Gamedetails from "./Explorecity/Gamedetails";
import Shoppingcart from "./Explorecity/Shoppingcart";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* <Route path="/" element={<Header />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/explorecity" element={<Explorecity />} />
        <Route path="/q&a" element={<QandA />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/explorecity/details/:id" element={<Gamedetails />} />
        <Route path="/explorecity/addtocard" element={<Shoppingcart />} />
        <Route path="/bag" element={<Shoppingcart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

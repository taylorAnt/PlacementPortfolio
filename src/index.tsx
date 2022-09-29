import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Home,
  About,
  Projects,
  Contact,
  MobileDev,
  WebDev,
  GamesDev
} from "./components";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />}/>
      <Route path="/mobiledev" element={<MobileDev />}/>
      <Route path="/webdev" element={<WebDev />}/>
      <Route path="/gamesdev" element={<GamesDev />}/>
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>,

  document.getElementById("root")
);

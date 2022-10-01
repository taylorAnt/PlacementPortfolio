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
} from "./components";

ReactDOM.render(
  <Router basename="/PlacementPortfolio">
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />}/>
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>,

  document.getElementById("root")
);

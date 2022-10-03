import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Home,
  About,
  Placement,
  Skills,
  Internships,
} from "./components";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/placement" element={<Placement />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/internships" element={<Internships />}/>
    </Routes>
  </Router>,

  document.getElementById("root")
);

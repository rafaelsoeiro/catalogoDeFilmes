import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./global.css";
import Details from "./pages/details/Details";
import Home from "./pages/home/Home";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="details/:id" element={<Details/>} />
      </Routes>

    </Router>
);

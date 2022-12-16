import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Gallery from "./Gallery/Gallery";
import NotFound from "./NotFound/NotFound";

function Body() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/galeria" element={<Gallery />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Body;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Gallery from "./Gallery/Gallery";
import MeetUs from "./MeetUs/MeetUs";
import Contact from "./Contact/Contact";
import NotFound from "./NotFound/NotFound";

function Body() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/galeria" element={<Gallery />} />
      <Route path="/conocenos" element={<MeetUs />} />
      <Route path="/contacto" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Body;

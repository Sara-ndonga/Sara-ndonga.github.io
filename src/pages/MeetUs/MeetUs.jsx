import React, { useState } from "react";
import Header from "./../../components/Header/Header";
import image1 from "./../../assets/pendejas/pendejas1.jpg";
import image2 from "./../../assets/pendejas/pendejas2.jpg";
import "./MeetUs.scss";

function MeetUs() {
  return (
    <div className="body">
      <Header />
      <h1 className="align-left">Conócenos</h1>
      <p>
        <ul className="us">
          <li>Sara Torres Martín</li>
          <li>Lucía Sanz Barrero</li>
          <li>Julieth Patricia Silvestre Delgado</li>
          <li>Nikolet Isabel Jaramillo Ullauri</li>
        </ul>
      </p>
      <img className="meetus-image image1" src={image1} />
      <img className="meetus-image image2" src={image2} />
    </div>
  );
}

export default MeetUs;

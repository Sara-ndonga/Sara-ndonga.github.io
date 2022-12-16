import React, { useState } from "react";
import Header from "./../../components/Header/Header";
import icon from "./../../assets/icon.png";
import "./Home.scss";

function Home() {
  let i = 0;
  const [fadeIn, setFadeIn] = useState("slogan");
  const fadeInEffect = () => {
    if (!fadeIn.includes("fadein") && i > 0) setFadeIn(fadeIn + " fadein");
    console.log(i);
    i++;
  };
  fadeInEffect();

  return (
    <div className="body">
      <Header />
      <h1
        className={fadeIn}
        style={{
          transition: "opacity 0.8s linear 0.2s",
        }}
      >
        Mil maneras de ser
      </h1>
      <img className="icon" src={icon} onLoad={fadeInEffect} />
      <h3 className="sub-title">La página de tus tazitas</h3>
    </div>
  );
}

export default Home;

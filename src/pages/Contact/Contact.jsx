import React from "react";
import Header from "./../../components/Header/Header";
import facebookIcon from "./../../assets/icons/feisbus.png";
import instagramIcon from "./../../assets/icons/insta.png";
import twitterIcon from "./../../assets/icons/tuitah.png";
import "./Contact.scss";

function Contact() {
  const goTo = (link) => {
    window.open(link, "_blank");
  };
  const link = (e) => {
    console.log(e.target.alt);
    const page = e.target.alt;
    switch (page) {
      case "facebook":
        goTo("https://www.facebook.com");
        break;
      case "instagram":
        goTo("https://www.instagram.com");
        break;
      case "twitter":
        goTo("https://www.twitter.com");
        break;
    }
  };
  return (
    <div className="body">
      <Header />
      <p>Holi</p>
      <p>En construcción</p>
      <p>No sé qué poner aquí xd</p>
      <div className="footer">
        <p>Síguenos en nuestras redes sociales</p>
        <div className="buttonsContainer">
          <img
            className="imgBtn"
            src={facebookIcon}
            alt="facebook"
            onClick={link}
          />
          <img
            className="imgBtn"
            src={instagramIcon}
            alt="instagram"
            onClick={link}
          />
          <img
            className="imgBtn"
            src={twitterIcon}
            alt="twitter"
            onClick={link}
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;

import React from "react";
import oops from "./../../assets/oops.png";
import "./NotFound.scss";

function NotFound() {
  return (
    <div className="error404">
      <h1>Error 404</h1>
      <h2>Page not found</h2>
      <img className="oops" src={oops} />
      <p className="message">La hemos liao</p>
    </div>
  );
}

export default NotFound;

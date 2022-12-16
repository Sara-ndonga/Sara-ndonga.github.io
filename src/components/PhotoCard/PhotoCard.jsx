import React from "react";
import "./PhotoCard.scss";

function PhotoCard(props) {
  return (
    <div className="card">
      <img src={props.photo} className="cupPhoto" />
      <p>{props.photoName}</p>
    </div>
  );
}

export default PhotoCard;

import React from "react";
import "./Bubble.scss";

function Bubble(props) {
  return (
    <div
      className="bubble"
      style={{
        top: props.top,
        left: props.left,
        backgroundImage: `linear-gradient(rgb(${Math.random() * 255}, ${
          Math.random() * 255
        }, ${Math.random() * 255}), rgb(${Math.random() * 255}, ${
          Math.random() * 255
        }, ${Math.random() * 255}))`,
      }}
    />
  );
}

export default Bubble;

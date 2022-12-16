import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive((isActive) => !isActive);
  };

  return (
    <div className="headerContainer top-nav">
      <h1 className="title">
        <Link to="/">Zata</Link>
      </h1>
      <input id="menu-toggle" type="checkbox" />
      <label
        className="menu-button-container"
        htmlFor="menu-toggle"
        onClick={handleClick}
      >
        <div
          className="menu-button"
          style={{
            backgroundColor: isActive ? "" : "yellow",
          }}
        ></div>
      </label>
      <ul className="menu">
        <li>
          <Link to="/galeria">Galería</Link>
        </li>
        <li>
          <Link to="/ups">Conócenos</Link>
        </li>
        <li>
          <Link to="/ups">Algo</Link>
        </li>
        <li>
          <Link to="/ups">Algo 2</Link>
        </li>
        <li>
          <Link to="/ups">Contacto</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;

import { useState } from "react";
import "./topbar.css";

export default function Topbar() {
  const [mobNav, setMobNav] = useState(false);

  function handleClick() {
    setMobNav((prev) => !prev);
  }

  return (
    <div className="topbar" id="topbar">
      <div className="wrapper">
        <div className="left">
          <a className="logo" href="#intro">
            Zaiem
          </a>
        </div>
        <div className="right">
          <ul className={mobNav ? "nav-items active" : "nav-items"}>
            <li className="nav-link" onClick={handleClick}>
              <a href="#intro">Home</a>
            </li>
            <li className="nav-link" onClick={handleClick}>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className="nav-link" onClick={handleClick}>
              <a href="#work">Work</a>
            </li>
            <li className="nav-link" onClick={handleClick}>
              <a href="#contact"> Contacts</a>
            </li>
          </ul>
        </div>
        <div className="mobile" onClick={handleClick}>
          <span className={mobNav ? "active" : "span"}></span>
          <span className={mobNav ? "active" : "span"}></span>
          <span className={mobNav ? "active" : "span"}></span>
        </div>
      </div>
    </div>
  );
}

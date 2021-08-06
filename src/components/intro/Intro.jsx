import "./intro.css";
import { useEffect, useRef } from "react";
import { init } from "ityped";

export default function Intro() {
  const item = useRef();

  useEffect(() => {
    init(item.current, {
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Developer.", "Designer.", "Student."],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/zaiem2.jpg" alt="img" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2 className="intro-animate">Hi There, I'm</h2>
          <h1 className="intro-animate">Zaiem Munshi</h1>
          <h3 className="intro-animate">
            A Freelance <span ref={item}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="../../../assets/down.png" alt="down" />
        </a>
      </div>
    </div>
  );
}

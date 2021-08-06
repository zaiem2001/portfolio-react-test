import { useState } from "react";
import "./work.css";
import workData from "../../WorkData";

export default function Work() {
  const [slideTo, setSlideTo] = useState(0);

  function handleClick(side) {
    side === "left"
      ? setSlideTo(slideTo > 0 ? slideTo - 1 : workData.length - 1)
      : setSlideTo(slideTo < workData.length - 1 ? slideTo + 1 : 0);
  }

  return (
    <div className="work" id="work">
      <div
        className="work-slider"
        style={{ transform: `translateX(-${slideTo * 100}vw)` }}
      >
        {workData.map((item, index) => {
          return (
            <div className="work-container">
              <div className="work-item">
                <div className="item-left">
                  <div className="leftContainer">
                    <div className="work-img">
                      <img src={item.icon} alt="img" />
                    </div>
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <span>{item.title}</span>
                  </div>
                </div>
                <div className="item-right">
                  <div className="rightImgCon">
                    <img src={item.img} alt="img" />
                  </div>
                </div>
              </div>
            <span className="index">{index + 1}</span>
            </div>
          );
        })}
      </div>
      <div className="arrow arrow-left" onClick={() => handleClick("left")}>
        <img src="assets/arrow.png" alt="" />
      </div>
      <div className="arrow arrow-right" onClick={() => handleClick()}>
        <img src="assets/arrow.png" alt="" />
      </div>
    </div>
  );
}

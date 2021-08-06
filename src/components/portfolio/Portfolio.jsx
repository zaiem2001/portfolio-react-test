import { useEffect, useState, useRef } from "react";
import Listitem from "../listitem/Listitem";
import "./portfolio.css";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";

export default function Portfolio() {
  const [isActive, setActive] = useState("featured");
  const [portfolio, setPortfolio] = useState([]);
  const allItems = useRef();

  const items = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "branding",
      title: "Branding",
    },
  ];

  useEffect(() => {
    switch (isActive) {
      case "featured":
        setPortfolio(featuredPortfolio);
        break;
      case "web":
        setPortfolio(webPortfolio);
        break;
      case "mobile":
        setPortfolio(mobilePortfolio);
        break;
      case "design":
        setPortfolio(designPortfolio);
        break;
      case "branding":
        setPortfolio(contentPortfolio);
        break;

      default:
        setPortfolio(featuredPortfolio);
    }
  }, [isActive]);


  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {items.map((item, index) => {
          return (
            <Listitem
              key={item.index}
              title={item.title}
              active={isActive === item.id}
              set={setActive}
              id={item.id}
            />
          );
        })}
      </ul>
      <div className="container">
        {portfolio.map((item, index) => {
          return (
            <div
              className="item"
              ref={allItems}
              key={index}
            >
              <img src={item.img} alt="img" />
              <h3>{item.title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

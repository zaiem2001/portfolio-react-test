import React from "react";
import "../components/topbar/topbar.css"

function Li(props) {
  return (
    <>
      <li className={props.className} onClick={props.onClick}>
        <a href={props.id}>{props.value}</a>
      </li>
    </>
  );
}

export default Li;

import React from "react";
import './Menu.css';
function MenuItem({ image, name, price, company }) {
  return (
    <div id="circle-shape-example">
      <img class="curve" src={image}></img>
      <div className="content">
      <h1> {name} </h1>
      <p> {company} </p>
      <p> ${price} </p>
      </div>
    </div>
    
  );
}

export default MenuItem;

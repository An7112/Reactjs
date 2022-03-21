import React from "react";
import './DataItem.css'
function DataItem({ img, name, title, desc, id }) {
  return (
    // <div className="Baran" style={{width:'100%', height:'600px'}}>
    <div className="DataItem" style={{width:'100%', height:'250px', marginBottom:'20px'}}>
      <img src={img} style={{float:'left', marginRight:'20px', height:'100%', width:'30%'}}></img>
    
      <h1> {name} </h1>
      <p> {id} </p>
      <p> {title} </p>
      <p> {desc} </p>
      </div>
      // </div>
  
    
  )
}

export default DataItem;
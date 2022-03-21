import React from "react";
import Data from "./Data";
import DataItem from "./DataItem";

function About ()  {
    return(
        <div className="About">
    {Data.map((dataItem, key) => {
        return (
          <DataItem
            key={key}
            id={dataItem.id}
            img={dataItem.img}
            name={dataItem.name}
            title={dataItem.title}
            desc={dataItem.desc}
          />
        );
      })}
      </div>
    )
    
}

export default About;
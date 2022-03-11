import React from "react";
// import './Menu.css';
import { MenuList } from "./MenuList";
import MenuItem from "./MenuItem";
function Menu () {
    return (
        <div className="menu">
        <div className="menuList">
          {MenuList.map((menuItem, key) => {
            return (
              <MenuItem
                key={key}
                image={menuItem.image}
                name={menuItem.name}
                text={menuItem.text}
                price={menuItem.price}
              />
            );
          })}
        </div>
      </div>
    )
}

export default Menu;
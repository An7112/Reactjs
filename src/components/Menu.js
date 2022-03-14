import React from "react";
import IndexMenu from "./IndexMenu";
// import MenuList from "./MenuList"
function Menu () {
    return (
        <div className="menu">
        <div className="menuList">
          <IndexMenu/>
          {/* {MenuList.map((menuItem, key) => {
            return (
              <MenuItem
                key={key}
                image={menuItem.image}
                name={menuItem.name}
                company={menuItem.company}
                price={menuItem.price}
              />
            );
          })} */}
        </div>
      </div>
    )
}

export default Menu;
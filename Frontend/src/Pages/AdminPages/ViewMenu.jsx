import React, { useEffect, useState } from "react";
import "./ViewMenu.css";

const ViewMenu = () => {
  const [menu, setMenu] = useState([]);
  const getMenuItems = async () => {
    try {
      const resp = await fetch("/api/menu/get", {
        method: "GET",
      });
      const data = await resp.json();
      console.log(data);

      if (resp.ok) {
        setMenu(data.message);
      }
    } catch (error) {
      console.error("Error fetching menu items:", error);
    }
  };

  useEffect(() => {
    getMenuItems();
  }, []);
  return (
    <>
      <main className="container-menu">
        <div className="menu">
          <h2 className="menu-group-heading">Main Course</h2>
          <div className="menu-group">
            {menu.map((item, idx) => {
              return (
                <div key={idx} className="menu-item">
                  <div className="menu-item-heading">
                    <h3 className="menu-item-name">{item.itemName}</h3>
                    <div className="menu-item-desc">{item.itemDescription}</div>
                  </div>
                  <div className="menu-prices">
                    <h3 className="menu-item-price">₹{item.itemPrice}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
};

export default ViewMenu;

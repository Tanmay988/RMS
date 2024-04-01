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
        localStorage.setItem("menu", JSON.stringify(data.message[0]));
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
          {Object.entries(
            menu.reduce((acc, item) => {
              if (!acc[item.itemCategory]) {
                acc[item.itemCategory] = [];
              }
              acc[item.itemCategory].push(item);
              return acc;
            }, {})
          ).map(([category, items], idx) => (
            <div key={idx}>
              {/* Render category heading */}
              <h2 className="menu-group-heading">{category}</h2>
              <div className="menu-group">
                {/* Render items within the category */}
                {items.map((item, index) => (
                  <div key={index} className="menu-item">
                    <div className="menu-item-heading">
                      <h3 className="menu-item-name">{item.itemName}</h3>
                      <div className="menu-item-desc">
                        {item.itemDescription}
                      </div>
                    </div>
                    <div className="menu-prices">
                      <h3 className="menu-item-price">₹{item.itemPrice}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default ViewMenu;

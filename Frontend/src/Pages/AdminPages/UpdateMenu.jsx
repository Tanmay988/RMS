import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import "./UpdateMenu.css";
import UpdateMenuForm from "./UpdateMenuForm";
const UpdateMenu = () => {
  const [menu, setMenu] = useState([]);

  const [restaurantId, setRestaurantId] = useState(null);

  // function to get menu items
  const getMenuItems = async () => {
    try {
      const resp = await fetch("/api/menu/get", {
        method: "GET",
      });
      const data = await resp.json();
      // console.log("hello", data);
      if (resp.ok) setRestaurantId(data.message[0].restaurantId);

      if (resp.ok) {
        setMenu(data.message);
      }
    } catch (error) {
      console.error("Error fetching menu items:", error);
    }
  };

  // function to delete menu items

  const deleteItem = async (id, name) => {
    try {
      const resp = await fetch("/api/menu/remove", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ restaurantId: id, itemName: name }),
      });

      const data = await resp.json();
      if (resp.ok) {
        getMenuItems();
        console.log("deleted item", resp);
      }
    } catch (error) {
      console.log("Error in deleting menu items", error);
    }
  };

  useEffect(() => {
    getMenuItems();
  }, []);

 
  return (
    <>
      <main className="container-menu">
        <div className="menu">
          <h2 className="menu-group-heading">Starter</h2>
          <Link to={`/admin/add/${restaurantId}`}>
            <button className="Btn">Add item</button>
          </Link>
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
                    <div className="btn-grp">
                      <Link
                        to={`/admin/editmenu/${item.restaurantId}/${item.itemName}`}
                      >
                        <button className="edit">
                          <MdEdit />
                        </button>
                      </Link>
                      <button className=" trash">
                        <Link to="/admin/editmenu">
                          <MdDelete
                            onClick={() =>
                              deleteItem(item.restaurantId, item.itemName)
                            }
                          />
                        </Link>
                      </button>
                    </div>
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

export default UpdateMenu;

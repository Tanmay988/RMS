import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdDelete, MdEdit } from "react-icons/md";
import "./UpdateMenu.css";
import toast from "react-hot-toast";

const UpdateMenu = () => {
  const [menu, setMenu] = useState([]);
  const [restaurantId, setRestaurantId] = useState(null);

  // Function to get menu items
  const getMenuItems = async () => {
    try {
      const resp = await fetch("/api/menu/get", {
        method: "GET",
      });
      const data = await resp.json();
      if (resp.ok) setRestaurantId(data.message[0].restaurantId);
      if (resp.ok) setMenu(data.message);
    } catch (error) {
      console.error("Error fetching menu items:", error);
      toast.error("Error fetching menu items");
    }
  };

  // Function to delete menu items
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
        toast.success("Item deleted successfully");
        getMenuItems();
      }
    } catch (error) {
      console.log("Error in deleting menu items", error);
      toast.error("Error in deleting menu items");
    }
  };

  useEffect(() => {
    getMenuItems();
  }, []);

  return (
    <main className="container-menu">
      <div className="menu">
        {/* Check if menu is empty */}
        {menu.length === 0 ? (
          <div className="empty-menu">
            <h2>No menu items found</h2>
            <Link to={`/admin/add/${restaurantId}`}>
              <button className="Btn-add">Add Menu Item</button>
            </Link>
          </div>
        ) : (
          // Render menu items
          Object.entries(
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
              <div className="category-header">
                <h2 className="menu-group-heading">{category}</h2>
                <Link to={`/admin/add/${restaurantId}`}>
                  <button className="Btn-add">Add item</button>
                </Link>
              </div>
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
                      <div className="btn-grp">
                        <Link
                          to={`/admin/editmenu/${item.restaurantId}/${item.itemName}`}
                        >
                          <button className="edit">
                            <MdEdit />
                          </button>
                        </Link>
                        <button
                          className="trash"
                          onClick={() =>
                            deleteItem(item.restaurantId, item.itemName)
                          }
                        >
                          <MdDelete />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </main>
  );
};

export default UpdateMenu;

import React, { useEffect, useState } from "react";
import "./Tables.css";

const Tables = () => {
  const [tables, setTables] = useState([]);
  const data_id = JSON.parse(localStorage.getItem("Restaurant-user"));
  const restaurantId = "66066e54a8a7b252cd3bf6dc"; // Example restaurant ID
  // console.log(restaurantId);

  const viewTables = async () => {
    try {
      const res = await fetch("/api/order/view", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ restaurantId }),
      });
      if (!res.ok) {
        throw new Error("Failed to fetch tables");
      }
      const data = await res.json();
      setTables(data.ordersByRestaurant);
      // console.log("tables:", tables);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    viewTables();
  }, []);

  return (
    <div className="container">
      <div className="table-box">
        {tables.map((table) => (
          <div className="card-table" key={table.tableNo}>
            <div className="order">
              <div className="order-details">Table: {table.tableNo}</div>
              {table.orders.map((order, index) => (
                <div className="order-item" key={index}>
                  <div className="order-item-heading">
                    <h2>Order items</h2>
                  </div>
                  <div className="items">
                    {order.itemName.map((itemName, i) => (
                      <div className="item" key={i}>
                        <div className="item-details">
                          <div className="item-name">{itemName}</div>
                          <div className="item-quantity">
                            {order.itemQuantity[i]}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <input type="checkbox" className="order-status" /> Status
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tables;

import React from "react";
import "./Tables.css";

const Tables = () => {
  return (
    <>
      <div className="box">
        <div className="table-box">
          <div className="card-table">
            <div className="card-header">Table 1</div>
            <div className="order-list">
              <ul>
                <li>Pizza</li>
                <li>Burger</li>
                <li>French Fries</li>
              </ul>
            </div>
            <div className="total-price">Total Price: $25</div>
            <div className="status-checkbox">
              <input type="checkbox" id="table1-status" />
              <label for="table1-status">Order Completed</label>
            </div>
          </div>
          <div className="card-table">
            <div className="card-header">Table 2</div>
            <div className="order-list">
              <ul>
                <li>Pizza</li>
                <li>Burger</li>
                <li>French Fries</li>
              </ul>
            </div>
            <div className="total-price">Total Price: $25</div>
            <div className="status-checkbox">
              <input type="checkbox" id="table1-status" />
              <label for="table1-status">Order Completed</label>
            </div>
          </div>
          <div className="card-table">
            <div className="card-header">Table 3</div>
            <div className="order-list">
              <ul>
                <li>Pizza</li>
                <li>Burger</li>
                <li>French Fries</li>
              </ul>
            </div>
            <div className="total-price">Total Price: $25</div>
            <div className="status-checkbox">
              <input type="checkbox" id="table1-status" />
              <label for="table1-status">Order Completed</label>
            </div>
          </div>
          <div className="card-table">
            <div className="card-header">Table 4</div>
            <div className="order-list">
              <ul>
                <li>Pizza</li>
                <li>Burger</li>
                <li>French Fries</li>
              </ul>
            </div>
            <div className="total-price">Total Price: $25</div>
            <div className="status-checkbox">
              <input type="checkbox" id="table1-status" />
              <label for="table1-status">Order Completed</label>
            </div>
          </div>
          <div className="card-table">
            <div className="card-header">Table 5</div>
            <div className="order-list">
              <ul>
                <li>Pizza</li>
                <li>Burger</li>
                <li>French Fries</li>
              </ul>
            </div>
            <div className="total-price">Total Price: $25</div>
            <div className="status-checkbox">
              <input type="checkbox" id="table1-status" />
              <label for="table1-status">Order Completed</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tables;

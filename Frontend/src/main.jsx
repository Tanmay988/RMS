import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { Toaster } from "react-hot-toast";
import { AuthContextProvider } from "./Context/authContext";
import { RestaurantContextProvider } from "./Context/restaurantContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <RestaurantContextProvider>
          <App />
        </RestaurantContextProvider>
      </AuthContextProvider>
      <Toaster />
    </BrowserRouter>
  </React.StrictMode>
);

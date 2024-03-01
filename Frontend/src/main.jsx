import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import toast, { Toaster } from "react-hot-toast";
import { AuthContextProvider } from "./Context/authContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
      <Toaster />
    </BrowserRouter>
  </React.StrictMode>
);

import React, { createContext, useContext, useState } from "react";

export const RestaurantContext = createContext();

export const useRestaurant = () => {
  return useContext(RestaurantContext);
};

export const RestaurantContextProvider = ({ children }) => {
  const [menu, setMenu] = useState(
    JSON.parse(localStorage.getItem("menu")) || null
  );

  // console.log("Restaurant ID from contxt:", menu.restaurantId);

  return (
    <RestaurantContext.Provider value={{ menu, setMenu }}>
      {children}
    </RestaurantContext.Provider>
  );
};

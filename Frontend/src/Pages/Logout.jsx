import React from "react";
import useLogout from "../Hooks/useLogout";

const Logout = () => {
  const { logoutPage, loading } = useLogout();

  return (
    <div>
      {loading ? (
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <div className="Btn" onClick={logoutPage}>
          Logout
        </div>
      )}
    </div>
  );
};

export default Logout;

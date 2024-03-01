import React, { useState } from "react";
import toast from "react-hot-toast";
import { useAuth } from "../Context/authContext";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
  const navigate = useNavigate();
  const { setAuthUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const logoutPage = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }
      if (response.ok) {
        localStorage.removeItem("Restaurant-user");
        setAuthUser(null);
        toast.success(data.message);
        navigate("/login");
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { logoutPage, loading };
};

export default useLogout;

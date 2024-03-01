import React, { useState } from "react";
import toast from "react-hot-toast";
import { useAuth } from "../Context/authContext";

const useSignup = () => {
  const { setAuthUser } = useAuth();
  const [loading, setLoading] = useState(false);

  const signup = async ({
    restaurantName,
    email,
    phoneNo,
    password,
    confirmPassword,
  }) => {
    setLoading(true);
    const success = handleErrors({
      restaurantName,
      email,
      phoneNo,
      password,
      confirmPassword,
    });

    if (!success) {
      setLoading(false);
      return;
    }
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          restaurantName,
          email,
          phoneNo,
          password,
          confirmPassword,
        }),
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }
      //   console.log(data);
      if (response.ok) {
        localStorage.setItem("Restaurant-user", JSON.stringify(data));
        setAuthUser(data);
        toast.success("Restaurant created successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { signup, loading };
};

export default useSignup;

function handleErrors({
  restaurantName,
  email,
  phoneNo,
  password,
  confirmPassword,
}) {
  if (!restaurantName || !email || !phoneNo || !password || !confirmPassword) {
    toast.error("All fields are required");
    return false;
  }
  if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }
  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }
  return true;
}

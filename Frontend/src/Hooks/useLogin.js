import React from "react";
import toast from "react-hot-toast";
import { useAuth } from "../Context/authContext";

const useLogin = () => {
  const { setAuthUser } = useAuth();
  const [loading, setLoading] = React.useState(false);

  const LoginPage = async ({ email, password }) => {
    setLoading(true);
    const success = errorHandeler({ email, password });

    if (!success) {
      setLoading(false);
      return;
    }

    try {
      const resonse = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await resonse.json();

      if (data.error) {
        throw new Error(data.error);
      }
      if (resonse.ok) {
        localStorage.setItem("Restaurant-user", JSON.stringify(data));
        setAuthUser(data);
        toast.success(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { LoginPage, loading };
};

export default useLogin;

function errorHandeler({ email, password }) {
  if (!email || !password) {
    toast.error("Please fill all the fields");
    return false;
  }
  if (password.length < 6) {
    toast.error("Password should be atleast 6 characters long");
    return false;
  }
  return true;
}

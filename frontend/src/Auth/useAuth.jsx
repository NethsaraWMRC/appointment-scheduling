import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const publicRoutes = ["/login", "/register"];

export const useAuth = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (publicRoutes.includes(location.pathname)) return;

    if (!isAuthenticated()) {
      navigate("/login", { replace: true });
    }
  }, [location.pathname, navigate]);

  return;
};

const isAuthenticated = () => {
  try {
    const token = localStorage.getItem("token");

    if (!token) return false;

    const decoded = jwtDecode(token);
    console.log(decoded);
    localStorage.setItem("userId", decoded.userId);

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

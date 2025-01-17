import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { authState } = useContext(AuthContext);
  const isLoggedIn = authState && authState.token;

  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;

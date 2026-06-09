import { Navigate } from "react-router-dom";

const MerchantRoute = ({ children }) => {
  const role = localStorage.getItem("role");

  return role === "MERCHANT"
    ? children
    : <Navigate to="/login" />;
};

export default MerchantRoute;
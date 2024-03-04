import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../src/providers/UserContext";

const PrivateRoutes = () => {
  const { userLogin } = useContext(UserContext);

  return userLogin ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;

import { Route, Routes } from "react-router-dom";
import LoginPage from "../src/pages/LoginPage";
import DashboardPage from "../src/pages/DashboardPage";
import RegisterPage from "../src/pages/RegisterPage";
import PrivateRoutes from "./PrivateRoutes";

const RoutesMain = () => {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path="/dashboard" element={<DashboardPage />} />
      </Route>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};

export default RoutesMain;

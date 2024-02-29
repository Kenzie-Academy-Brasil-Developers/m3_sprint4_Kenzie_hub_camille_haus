import { Route, Routes, useNavigate } from "react-router-dom";
import LoginPage from "../src/pages/LoginPage";
import DashboardPage from "../src/pages/DashboardPage";
import RegisterPage from "../src/pages/RegisterPage";
import { useState } from "react";


const RoutesMain = () => {

  const [ userLogin, setUserLogin ] = useState(null);

  const navigate = useNavigate();

  const logout = () => {
    setUserLogin(null);
    localStorage.removeItem("@KenzieHub:token");
    navigate("/");
  }

  return (
    <Routes>
      <Route path="/" element={<LoginPage setUserLogin={setUserLogin}/>} />
      <Route path="/dashboard" element={<DashboardPage userLogin={userLogin} logout={logout}/>} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};

export default RoutesMain;

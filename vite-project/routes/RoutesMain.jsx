import { Route, Routes} from "react-router-dom";
import LoginPage from "../src/pages/LoginPage";
import DashboardPage from "../src/pages/DashboardPage";
import RegisterPage from "../src/pages/RegisterPage";



const RoutesMain = () => {

  // const [ userLogin, setUserLogin ] = useState(null);

  // const logout = () => {
  //   setUserLogin(null);
  //   localStorage.removeItem("@KenzieHub:token");
  //   navigate("/");
  // }

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};

export default RoutesMain;

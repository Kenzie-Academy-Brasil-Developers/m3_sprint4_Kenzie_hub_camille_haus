import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {

  const navigate = useNavigate();

  const [userLogin, setUserLogin] = useState(null);

  const createUser = async (payload) => {
    const { confirmPassword, ...rest } = payload;

    try {
      const { data } = await api.post("/users", rest);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const loginUser = async (payload) => {
    try {
      const { data } = await api.post("/sessions", payload);
      navigate("/dashboard");
      setUserLogin(data.user);

      toast.success("Login efetuado com sucesso!");

      localStorage.setItem("@KenzieHub:token", data.token);
    } catch (error) {
      console.log(error);

      toast.error("Usuário e/ou senha inválidos");
    }
  };

  const logout = () => {
    setUserLogin(null);
    localStorage.removeItem("@KenzieHub:token");
    navigate("/");
  };

  return (
    <UserContext.Provider value={{ userLogin, createUser, loginUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};

import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../../services/api";
import { jwtDecode } from "jwt-decode";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();

  const [userLogin, setUserLogin] = useState(null);
  const [techsList, setTechsList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const createUser = async (payload) => {
    const { confirmPassword, ...rest } = payload;

    try {
      const { data } = await api.post("/users", rest);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const googleLogIn = async (credentialResponse) => {
    const credentialResponseDecoded = jwtDecode(credentialResponse.credential);

    try {
      const googleData = await api.post("/sessions", credentialResponseDecoded);
      navigate("/dashboard");
      setUserLogin(googleData.name);

      toast.success("Login efetuado com sucesso!");

      localStorage.setItem("@Google:token", JSON.stringify(googleData.sub));

    } catch (error) {
      console.log(error);

      toast.error("Não foi possível logar com o Google");
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

  useEffect(() => {
    const loginAuto = async () => {
      const token = localStorage.getItem("@KenzieHub:token");

      if (token) {
        try {
          const { data } = await api.get("/profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUserLogin(data);
          setTechsList(data.techs);
          navigate("/dashboard");
        } catch (error) {
          console.log(error);

          localStorage.removeItem("@KenzieHub:token");
        }
      }
    };
    loginAuto();
  }, []);

  return (
    <UserContext.Provider
      value={{
        userLogin,
        createUser,
        loginUser,
        logout,
        techsList,
        setTechsList,
        openModal,
        closeModal,
        isOpen,
        googleLogIn,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

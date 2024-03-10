import { createContext, useContext } from "react";
import api from "../../services/api";
import { UserContext } from "../UserContext";

export const TechContext = createContext({});

export const TechProvider = ({ children }) =>  {

    const { techsList, setTechsList } = useContext(UserContext);

    console.log(setTechsList)

    const getTechsList = async (payload) => {

        const token = localStorage.getItem("@KenzieHub:token")

        try {
            const { data } = await api.post("/users/techs", payload, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            setTechsList([...techsList, data]);
        } catch (error) {
            console.log(error)
        }
    };


    return (
        <TechContext.Provider value={{getTechsList}}>{children}</TechContext.Provider>
    )
}
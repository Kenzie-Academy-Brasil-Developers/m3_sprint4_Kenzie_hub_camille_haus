import { createContext, useContext, useState } from "react";
import api from "../../services/api";
import { UserContext } from "../UserContext";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const { techsList, setTechsList, setIsOpen } = useContext(UserContext);
  const [editingTech, setEditingTech] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const openEditModal = () => {
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  const addTechs = async (payload) => {

    const token = localStorage.getItem("@KenzieHub:token");

    try {
      const { data } = await api.post("/users/techs", payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTechsList([...techsList, data]);
      setIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTech = async (removeId) => {

    const token = localStorage.getItem("@KenzieHub:token");

    try {
      await api.delete(`/users/techs/${removeId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const updatedTechList = techsList.filter((tech) => tech.id !== removeId);
      setTechsList(updatedTechList);
    } catch (error) {
      console.log(error);
    }
  };

  const techUpdate = async (payload) => {

    const token = localStorage.getItem("@KenzieHub:token");

    try {
      const { data } = await api.put(
        `/users/techs/${editingTech.id}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const newTechList = techsList.map((tech) => {
        if (tech.id === editingTech.id) {
          return data;
        } else {
          return tech;
        }
      });

      setTechsList(newTechList);
      setIsEditModalOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TechContext.Provider
      value={{
        addTechs,
        deleteTech,
        editingTech,
        setEditingTech,
        openEditModal,
        isEditModalOpen,
        closeEditModal,
        techUpdate,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};

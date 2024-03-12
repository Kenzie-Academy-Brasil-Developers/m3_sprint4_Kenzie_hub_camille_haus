import { useContext } from "react";
import Input from "../Input";
import styles from "../Modal/styles.module.scss";
import { useForm } from "react-hook-form";
import { UserContext } from "../../providers/UserContext";
import { TechContext } from "../../providers/TechContext";

const Modal = ({ title, buttonName }) => {
  const { addTechs, editingTech, techUpdate, setEditingTech, isEditModalOpen } =
    useContext(TechContext);
  const { isOpen } = useContext(UserContext);

  const { register, handleSubmit } = useForm({
    defaultValues: isEditModalOpen
      ? {
          title: editingTech.title,
          status: editingTech.status,
        }
      : {},
  });

  const submit = (formData) => {
    if (isOpen) {
      addTechs(formData);
    } else {
      setEditingTech(formData);
      techUpdate(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit(submit)} className={styles.form}>
      <Input
        label={"Nome"}
        type={"text"}
        placeholder={"Material UI"}
        {...register("title")}
      />
      <p>{title}</p>
      <select {...register("status")}>
        <option value={"Iniciante"}>Iniciante</option>
        <option value={"Intermediário"}>Intermediário</option>
        <option value={"Avançado"}>Avançado</option>
      </select>
      <button type="submit">{buttonName}</button>
    </form>
  );
};

export default Modal;

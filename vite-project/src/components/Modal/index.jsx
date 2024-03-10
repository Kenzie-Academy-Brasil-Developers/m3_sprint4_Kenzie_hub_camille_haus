import { useContext } from "react";
import Input from "../Input";
import styles from "../Modal/styles.module.scss"
import { useForm } from "react-hook-form";
import { UserContext } from "../../providers/UserContext";
import { TechContext } from "../../providers/TechContext";

const Modal = ({title, buttonName}) => {

  const { setTechsList, getTechsList } = useContext(TechContext);

  const { register, handleSubmit } = useForm();

  const submit = (formData) => {
    setTechsList(formData);
  }

  return (
    <form onSubmit={handleSubmit(submit)} className={styles.form}>
      <Input label={"Nome"} type={"text"} placeholder={"Material UI"} {...register("title")}/>
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

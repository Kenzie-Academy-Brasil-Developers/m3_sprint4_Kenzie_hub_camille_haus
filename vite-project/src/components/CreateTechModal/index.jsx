import Modal from "../Modal";
import styles from "../CreateTechModal/modal.module.scss";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

const CreateTechModal = () => {
  const { closeModal } = useContext(UserContext);

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalTop}>
        <h3>Cadastrar Tecnologias</h3>
        <button className={styles.closeButton} onClick={() => closeModal()}>
          X
        </button>
      </div>
      <Modal title={"Selecionar status"} buttonName={"Cadastrar Tecnologia"}/>
    </div>
  );
};

export default CreateTechModal;

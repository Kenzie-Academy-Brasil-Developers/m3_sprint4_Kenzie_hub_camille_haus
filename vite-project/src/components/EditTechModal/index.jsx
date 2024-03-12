import Modal from "../Modal";
import styles from "../CreateTechModal/modal.module.scss";
import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";

const EditTechModal = () => {
  const { closeEditModal } = useContext(TechContext);

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalTop}>
        <h3>Tecnologia Detalhes</h3>
        <button className={styles.closeButton} onClick={() => closeEditModal()}>
          X
        </button>
      </div>
      <Modal title={"Status"} buttonName={"Salvar Alterações"} />
    </div>
  );
};

export default EditTechModal;

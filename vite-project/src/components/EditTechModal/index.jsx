import Modal from "../Modal";
import styles from "../CreateTechModal/modal.module.scss";

const EditTechModal = () => {
    return (
        <div className={styles.modalOverlay}>
            <h3>Tecnologia Detalhes</h3>
            <button className={styles.closeButton}>X</button>
            <Modal title={"Status"} buttonName={"Salvar Alterações"}/>
        </div>
    )
}

export default EditTechModal;
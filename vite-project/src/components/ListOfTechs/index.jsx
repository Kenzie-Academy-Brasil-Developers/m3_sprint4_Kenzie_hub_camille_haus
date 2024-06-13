import { MdDelete } from "react-icons/md";
import { LuPencil } from "react-icons/lu";
import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";
import styles from "../ListOfTechs/listOfTechs.module.scss";

const ListOfTechs = ({ tech }) => {
  const { deleteTech, setEditingTech, openEditModal } = useContext(TechContext);

  return (
    <li className={styles.li}>
      <h4>{tech.title}</h4>
      <div className={styles.container}>
        <p>{tech.status}</p>
        <div>
          <button>
            <MdDelete size={20} onClick={() => deleteTech(tech.id)} />
          </button>
          <button
            onClick={() => {
              openEditModal();
              setEditingTech(tech);
            }}
          >
            <LuPencil size={17} />
          </button>
        </div>
      </div>
    </li>
  );
};

export default ListOfTechs;

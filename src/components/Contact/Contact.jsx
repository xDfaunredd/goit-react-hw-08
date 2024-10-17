import { useDispatch } from "react-redux";

import s from "./Contact.module.css";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ id, number, name }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={s.item}>
      <div className={s.container}>
        <p className={s.username}>{name}</p>
        <p className={s.userNumber}>{number}</p>
      </div>
      <button onClick={handleDelete} className={s.button}>
        Delete
      </button>
    </li>
  );
};

export default Contact;

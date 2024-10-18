import { Link } from "react-router-dom";

import s from "./UserMenu.module.css";

const UserMenu = () => {
  return (
    <div className={s.container}>
      <Link to="/contacts" className={s.link}>
        Contacts
      </Link>
    </div>
  );
};

export default UserMenu;

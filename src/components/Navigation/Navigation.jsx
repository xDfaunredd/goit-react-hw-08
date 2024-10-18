import { Link } from "react-router-dom";

import s from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div>
      <Link to="/" className={s.link}>
        Home
      </Link>
    </div>
  );
};

export default Navigation;

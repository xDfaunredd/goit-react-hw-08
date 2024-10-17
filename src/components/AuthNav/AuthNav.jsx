import { Link } from "react-router-dom";
import s from "./AuthNav.module.css";
const AuthNav = () => {
  return (
    <div>
      <nav className={s.nav}>
        <Link to="/register">Register</Link>
        <Link to="/login">LogIn</Link>
      </nav>
    </div>
  );
};

export default AuthNav;

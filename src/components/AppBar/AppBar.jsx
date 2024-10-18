import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

import s from "./AppBar.module.css";
import { Outlet } from "react-router-dom";
import LogOut from "../LogOut/LogOut";

const AppBar = () => {
  const isLogged = useSelector(selectIsLoggedIn);

  return (
    <>
      <header className={s.header}>
        <Navigation />
        <UserMenu />
        {isLogged && <LogOut />}
        {!isLogged && <AuthNav />}
      </header>
      <Outlet />
    </>
  );
};

export default AppBar;

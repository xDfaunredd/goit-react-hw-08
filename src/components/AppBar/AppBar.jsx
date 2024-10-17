import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import LogOut from "../LogOut/LogOut";
import s from "./AppBar.module.css";

const AppBar = () => {
  const isLogged = useSelector(selectIsLoggedIn);
  console.log(isLogged);

  return (
    <>
      <header className={s.header}>
        <Navigation />

        <UserMenu />
        {isLogged && <LogOut />}

        {!isLogged && <AuthNav />}
      </header>
    </>
  );
};

export default AppBar;

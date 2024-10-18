import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { Button } from "@mui/material";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import s from "./LogOut.module.css";

const LogOut = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  const user = useSelector(selectUser);
  const isLogged = useSelector(selectIsLoggedIn);

  return (
    <div className={s.container}>
      {isLogged ? <p> {user.email}</p> : ""}
      <Button onClick={handleLogout} variant="contained">
        Exit
      </Button>
    </div>
  );
};

export default LogOut;

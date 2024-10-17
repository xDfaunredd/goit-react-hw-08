import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";

const Navigation = () => {
  const user = useSelector(selectUser);
  const isLogged = useSelector(selectIsLoggedIn);

  return (
    <div>
      <Link to="/">Home</Link>
      {isLogged ? <p>Welcome , {user.name}</p> : ""}
    </div>
  );
};

export default Navigation;

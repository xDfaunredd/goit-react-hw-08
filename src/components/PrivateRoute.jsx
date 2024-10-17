import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ component: Component, renavigateTo }) => {
  const isLogged = useSelector(selectIsLoggedIn);

  return isLogged ? <Component /> : <Navigate to={renavigateTo} />;
};

export default PrivateRoute;

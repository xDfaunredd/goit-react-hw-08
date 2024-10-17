import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import { Navigate } from "react-router-dom";

const ResrictedRoute = ({ component: Component, renavigateTo }) => {
  const isLogged = useSelector(selectIsLoggedIn);

  return isLogged ? <Navigate to={renavigateTo} /> : <Component />;
};

export default ResrictedRoute;

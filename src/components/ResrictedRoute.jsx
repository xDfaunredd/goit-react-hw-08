import { useSelector } from "react-redux";

import { selectIsLoggedIn } from "../redux/auth/selectors";
import { Navigate } from "react-router-dom";

const ResrictedRoute = ({ component: Component, redirectTo }) => {
  const isLogged = useSelector(selectIsLoggedIn);
  return isLogged ? <Navigate to={redirectTo} /> : <Component />;
};

export default ResrictedRoute;

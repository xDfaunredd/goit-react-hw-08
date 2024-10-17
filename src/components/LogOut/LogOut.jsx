import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const LogOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout())
      .unwrap()
      .then(() => {
        navigate("/login");
      })
      .catch(() => {
        toast.error("Something went wrong!");
      });
  };

  return <button onClick={handleLogout}>Exit</button>;
};

export default LogOut;

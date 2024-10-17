import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../../pages/Home/Home";
import LoginPage from "../../pages/LoginPage/LoginPage";
import RegistrationPage from "../../pages/RegistrationPage/RegistrationPage";
import ContactsPage from "../../pages/ContactsPage/ContactsPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { refreshUser } from "../../redux/auth/operations";
import PrivateRoute from "../PrivateRoute";
import ResrictedRoute from "../ResrictedRoute";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route
          path="login"
          element={
            <ResrictedRoute component={LoginPage} renavigateTo="/contacts" />
          }
        />
        <Route
          path="register"
          element={
            <ResrictedRoute
              component={RegistrationPage}
              renavigateTo="/contacts"
            />
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute component={ContactsPage} renavigateTo="/login" />
          }
        />
      </Route>

      <Route path="*" element={<h1>NOT FOUND 404</h1>} />
    </Routes>
  );
}

export default App;

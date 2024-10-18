import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../../pages/Home/Home";
import LoginPage from "../../pages/LoginPage/LoginPage";
import RegistrationPage from "../../pages/RegistrationPage/RegistrationPage";
import ContactsPage from "../../pages/ContactsPage/ContactsPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { refreshUser } from "../../redux/auth/operations";
import PrivateRoute from "../PrivateRoute";
import ResrictedRoute from "../ResrictedRoute";
import { selectIsRefreshing } from "../../redux/auth/selectors";

function App() {
  const dispatch = useDispatch();

  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? null : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route
          path="login"
          element={
            <ResrictedRoute component={LoginPage} redirectTo="/contacts" />
          }
        />
        <Route
          path="register"
          element={
            <ResrictedRoute
              component={RegistrationPage}
              redirectTo="/contacts"
            />
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute component={ContactsPage} redirectTo="/login" />
          }
        />
      </Route>

      <Route path="*" element={<h1>NOT FOUND 404</h1>} />
    </Routes>
  );
}

export default App;

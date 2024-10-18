import { Field, Form, Formik } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import s from "./LoginPage.module.css";

import { login } from "../../redux/auth/operations";
import { Button } from "@mui/material";
import toast from "react-hot-toast";

const initialValues = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const emailId = useId();
  const passwordId = useId();

  const dispatch = useDispatch();

  const handleSubmit = (values, options) => {
    if (values.email.trim() === "" || values.password.trim() === "") {
      return toast.error("Fill all fields");
    }
    dispatch(login(values))
      .unwrap()
      .then((data) => {
        toast.success(`Welcome ${data.user.name} ;)`);
      })
      .catch(() => {
        toast.error("Invalid authorization");
      });
    options.resetForm();
  };

  return (
    <div className={s.container}>
      <div>
        <h2>LogIn now!</h2>
        <p>Welcome to us</p>
      </div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <label htmlFor={emailId}>Email</label>
          <Field name="email" type="email" id={emailId} className={s.input} />
          <label htmlFor={passwordId}>Password</label>
          <Field
            name="password"
            type="password"
            id={passwordId}
            className={s.input}
          />
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginPage;

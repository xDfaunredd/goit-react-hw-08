import { Field, Form, Formik } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import s from "./RegistrationPage.module.css";
import { Button } from "@mui/material";
import toast from "react-hot-toast";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const RegistrationPage = () => {
  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();

  const dispatch = useDispatch();

  const handleSubmit = (values, options) => {
    if (
      values.email.trim() === "" ||
      values.password.trim() === "" ||
      values.name.trim() === ""
    ) {
      return toast.error("Fill all fields");
    }
    console.log(values);
    dispatch(register(values));
    options.resetForm();
  };

  return (
    <div className={s.container}>
      <div>
        <h2>SingUp now!</h2>
        <p>Lets explore</p>
      </div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <label htmlFor={nameId}>Name</label>
          <Field name="name" type="text" id={nameId} className={s.input} />
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

export default RegistrationPage;

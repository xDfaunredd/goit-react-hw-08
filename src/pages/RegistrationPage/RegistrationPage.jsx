import { Field, Form, Formik } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

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
    console.log(values);
    dispatch(register(values));
    options.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <label htmlFor={nameId}>Name</label>
        <Field name="name" type="text" id={nameId} />
        <label htmlFor={emailId}>Email</label>
        <Field name="email" type="email" id={emailId} />
        <label htmlFor={passwordId}>Password</label>
        <Field name="password" type="password" id={passwordId} />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default RegistrationPage;

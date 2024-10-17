import { Field, Form, Formik } from "formik";
import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const initialValues = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const navigate = useNavigate();

  const emailId = useId();
  const passwordId = useId();

  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  console.log(user.name);

  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(login(values))
      .unwrap()
      .then((res) => {
        toast(`Welcome ${res.user.name}`);
        navigate("/contacts");
      })
      .catch(() => {
        toast.error("Invalid credentials");
      });
    options.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <label htmlFor={emailId}>Email</label>
        <Field name="email" type="email" id={emailId} />
        <label htmlFor={passwordId}>Password</label>
        <Field name="password" type="password" id={passwordId} />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default LoginPage;

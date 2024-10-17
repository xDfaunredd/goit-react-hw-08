import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import toast from "react-hot-toast";
import * as Yup from "yup";

import s from "./ContactFrom.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short")
    .max(50, "Too long")
    .required("Required"),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, "Number format should be: 000-00-00")
    .required("Required"),
});

const ContactForm = () => {
  const nameId = useId();
  const numberId = useId();

  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, actions) => {
    if (values.name.trim() === "" || values.number.trim() === "") {
      return toast.error("Fill all fields.");
    }
    console.log(values);

    dispatch(addContact(values));

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={s.form}>
        <div className={s.container}>
          <label htmlFor={nameId}>Name</label>
          <Field name="name" id={nameId} className={s.field} />
          <ErrorMessage name="name" component="span" className={s.error} />
        </div>
        <div className={s.container}>
          <label htmlFor={numberId}>Number</label>
          <Field name="number" id={numberId} className={s.field} />
          <ErrorMessage name="number" component="span" className={s.error} />
        </div>
        <button type="submit" className={s.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;

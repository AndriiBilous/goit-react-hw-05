import { Field, Formik, Form, ErrorMessage } from "formik";
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

const notify = () => toast.error("Before search fill up the field, please.");

function SearchBar({ onSearch }) {
  return (
    <Formik
      initialValues={{ search: "" }}
      onSubmit={(value, actions) => {
        if (value.search.trim() === "") {
          notify();
          return;
        }
        onSearch(value.search);
        actions.resetForm();
      }}
    >
      <Form className={css.form}>
        <label></label>
        <Field
          className={css.input}
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <ErrorMessage name="search" component="span" />
        <button className={css.btn} type="submit">
          Search
        </button>
        <Toaster position="top-center" reverseOrder={false} />
      </Form>
    </Formik>
  );
}
export default SearchBar;

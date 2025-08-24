import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

function FormikForm() {
  const initialValues = { username: "", email: "", password: "" };

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        alert("User registered successfully with Formik!");
        resetForm();
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-xl font-bold">Formik Registration Form</h2>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        <Form className="space-y-4">
          <div>
            <label className="block">Username</label>
            <Field name="username" type="text" className="border p-2 w-full" />
            <ErrorMessage name="username" component="p" className="text-red-500" />
          </div>

          <div>
            <label className="block">Email</label>
            <Field name="email" type="email" className="border p-2 w-full" />
            <ErrorMessage name="email" component="p" className="text-red-500" />
          </div>

          <div>
            <label className="block">Password</label>
            <Field name="password" type="password" className="border p-2 w-full" />
            <ErrorMessage name="password" component="p" className="text-red-500" />
          </div>

          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default FormikForm;

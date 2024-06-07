"use client";
import axios from "axios";
import { Field, Form, Formik } from "formik";
import { uri } from "../constant/constant";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/slices/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);
console.log({user});  

  const onSubmit = async (values, actions) => {
    try {
      // await new Promise((resolve) => setTimeout(resolve, 1000));

      axios
        .post(`${uri}/login`, values, { withCredentials: true })
        .then(function (response) {
          console.log(response.data.token);

          dispatch(setUser(response.data.token));
        })
        .catch(function (error) {
          console.log(error);
        });

      console.log("Submitted:", values);
      alert("Form submitted successfully!");

      actions.resetForm();
    } catch (error) {
      console.error("Error during form submission:", error);
    }
  };
  const fieldClass =
    "w-full  h-[44px] rounded-lg outline-none py-3 px-2 border border-[#a5a5a5] lg:mt-2 lg:mb-6 ";
  return (
    <section className="">
      <div className="container pt-[200px] flex justify-center pb-16">
        <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="max-w-[500px] border p-8 shadow-2xl">
              <label htmlFor="fullname">Username</label>

              <Field type="text" name="username" className={`${fieldClass}`} />
              <label htmlFor="password">Password</label>

              <Field
                type="password"
                name="password"
                className={`${fieldClass}`}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue btn w-[160px] h-12   text-white rounded-lg mx-auto   "
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default Login;

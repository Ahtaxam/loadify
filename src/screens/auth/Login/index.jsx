import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikController from "../../../components/formik/formikController";
import Button from "../../../components/button";
import { Link } from "react-router-dom";
import { PATH } from "../../../utils/path";

function Login() {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required").min(8),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-2">
      <div className="bg-[#f5f5f5] w-full max-w-lg p-8 rounded-2xl">
        <p className="text-center font-extrabold text-xl">Login</p>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {(formik) => (
            <Form>
              <FormikController
                control="input"
                type="email"
                label="Email"
                name="email"
              />

              <FormikController
                control="input"
                type="password"
                label="Password"
                name="password"
              />

              <Button type="submit" className="w-full">
                Login
              </Button>
              <p className="text-sm text-right">
                Don't have an account?{" "}
                <Link to={PATH.SIGNUP} className="underline">
                  Create one
                </Link>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Login;

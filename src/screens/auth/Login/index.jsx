import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikController from "../../../components/formik/formikController";
import Button from "../../../components/button";
import { Link, useNavigate } from "react-router-dom";
import { PATH } from "../../../utils/path";
import { useLoginUserMutation } from '../../../redux/api/user';
import { storeCurrentUser } from '../../../utils/currentUser';
import { toast } from 'react-toastify';
import { useDispatch } from "react-redux";
import { storeUser } from "../../../redux/slice/currentUser";
import { connectToSocket } from "../../../context/socketEvent";
// import { connectToSocket } from "../../../context/socket";

function Login() {
  const [loginUser, {isLoading} ] = useLoginUserMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required").min(8),
  });

  const handleSubmit = async (values) => {
    try {
      const { message, data, token } = await loginUser(values).unwrap();
      toast.success(message);
      storeCurrentUser({ ...data, token });
      dispatch(storeUser(data))
      connectToSocket(data?._id)
      navigate(PATH.HOME)
    } catch (error) {
      toast.error(error?.data?.message);
      console.log(error);
    }
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
                {isLoading ? "Logging...":"Login"}
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

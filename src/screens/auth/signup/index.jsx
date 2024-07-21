import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikController from "../../../components/formik/formikController";
import Button from "../../../components/button";
import { Link, useNavigate } from "react-router-dom";
import { PATH } from "../../../utils/path";
import { useCreateUserMutation } from "../../../redux/api/user";
import { toast } from "react-toastify";
import { storeCurrentUser } from "../../../utils/currentUser";
import { connectToSocket } from "../../../context/socketEvent";
import { storeUser } from "../../../redux/slice/currentUser";
import { store } from "../../../redux/store";
import { useDispatch } from "react-redux";

function Signup({ className, closeModal }) {
  const [createUser, { isLoading }] = useCreateUserMutation();
  const navigate = useNavigate();
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
  };

  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    email: Yup.string().required("Email is required"),
    firstName: Yup.string().required("Firstname required"),
    lastName: Yup.string().required("Lastname is required"),
    phoneNumber: Yup.string().required("Phonenumber is required"),
    address: Yup.string().required("Addess is required"),
    password: Yup.string().required("Password is required").min(8),
  });

  const handleSubmit = async (values) => {
    try {
      const { message, data, token } = await createUser(values).unwrap();
      toast.success(message);
      storeCurrentUser({ ...data, token });
      connectToSocket(data?._id);
      if (closeModal) {
        closeModal();

        dispatch(storeUser(data));
        return;
      }
      navigate(PATH.HOME);
    } catch (error) {
      toast.error(error?.data?.message);
      console.log(error);
    }
  };

  return (
    <div
      className={`${
        className ?? "flex justify-center items-center min-h-screen p-2"
      }`}
    >
      <div className="bg-[#f5f5f5] w-full max-w-lg p-8 rounded-2xl">
        <p className="text-center font-extrabold text-xl">Create Account</p>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {(formik) => (
            <Form>
              <FormikController
                control="input"
                type="text"
                label="First Name"
                name="firstName"
              />
              <FormikController
                control="input"
                type="text"
                label="Last Name"
                name="lastName"
              />
              <FormikController
                control="input"
                type="email"
                label="Email"
                name="email"
              />
              <FormikController
                control="input"
                type="number"
                label="Phone number"
                name="phoneNumber"
              />
              <FormikController
                control="input"
                type="password"
                label="Password"
                name="password"
              />
              <FormikController
                control="input"
                type="text"
                label="Address"
                name="address"
              />
              {/* <div className="flex justify-between gap-4">
                {ROLE.map((name, i) => (
                  <p
                    key={i}
                    className={`border w-full text-center  p-4 rounded-xl cursor-pointer ${
                      name === selectedRole ? "bg-navy  text-white" : ""
                    }`}
                    onClick={() =>
                      handleSelectedRole(name, formik.setFieldValue)
                    }
                  >
                    {name}
                  </p>
                ))}
              </div> */}
              <Button type="submit" className="w-full">
                {isLoading ? "Creating..." : "Signup"}
              </Button>
              <p className="text-sm text-right">
                Already have an account?{" "}
                <Link to={PATH.LOGIN} className="underline">
                  Login
                </Link>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Signup;

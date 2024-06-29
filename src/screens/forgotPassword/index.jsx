import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikController from "../../components/formik/formikController";
import Button from "../../components/button";
import { Link, useNavigate } from "react-router-dom";
import { PATH } from "../../utils/path";
import { useLoginUserMutation } from "../../redux/api/user";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useForgotPasswordMutation } from "../../redux/api/password";

function ForgotPassword() {
  const [forgotPassword,{isLoading}] = useForgotPasswordMutation();
  const navigate = useNavigate();
  const initialValues = {
    email: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Email is required"),
  });

  const handleSubmit = async (values) => {
    try {
      const { data, message,is } = await forgotPassword(values).unwrap();
      console.log(data);
      toast.success(message);
    } catch (error) {
      toast.error(error?.data?.message || "SERVER ERROR");
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-2">
      <div className="bg-[#f5f5f5] w-full max-w-lg p-8 rounded-2xl">
        <p className="text-center font-extrabold text-xl">Forgot Password</p>
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
                label="Enter Email"
                name="email"
              />
              <Button type="submit" className="w-full">
                {isLoading ? "Loading..." : "Submit"}
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default ForgotPassword;

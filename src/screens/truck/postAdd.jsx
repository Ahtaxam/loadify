// import React, { useState } from "react";
// import { Formik, Form } from "formik";
// import * as Yup from "yup";
// import FormikController from "../../components/formik/formikController";
// import Button from "../../components/button";
// import { Link } from "react-router-dom";
// import { PATH } from "../../utils/path";
// import FileUpload from "../../components/fileUpload";

// const ROLE = ["Contractor", "Inventory"];
// function PostAdd() {
//   const [selectedRole, setSelectedRole] = useState(ROLE[0]);
//   const initialValues = {
//     vehicleName: "",
//     vehicleModel: "",
//     vehicleNumber: "",
//     ownerName: "",
//     phoneNumber: "",
//     ownerCnic: "",
//     cnicPicture: [],
//     licenceNumber: "",
//     licencePicture: [],
//     countryName: "",
//     city: "",
//     location: "",
//     vehicleType: "",
//     vehiclePicture: [],
//   };

//   const validationSchema = Yup.object({
//     vehicleName: Yup.string().required("Vehicle name is required"),
//     vehicleModel: Yup.string().required("Vehicle model is required"),
//     vehicleNumber: Yup.string().required("Vehicle number is required"),
//     ownerName: Yup.string().required("Owner name is required"),
//     phoneNumber: Yup.string().required("Phone number is required"),
//     ownerCnic: Yup.string()
//       .required("Owner CNIC is required")
//       .matches(/^\d{13}$/, "CNIC must be 13 digits"),
//     cnicPicture: Yup.array().min(1, "Select At-least one image").required(),
//     licenceNumber: Yup.string().required("Licence number is required"),
//     licencePicture: Yup.array().min(1, "Select At-least one image").required(),
//     countryName: Yup.string().required("Country name is required"),
//     city: Yup.string().required("City is required"),
//     location: Yup.string().required("Location is required"),
//     vehicleType: Yup.string().required("Vehicle type is required"),
//   });

//   const handleSubmit = (values) => {
//     console.log(values);
//   };

//   const handleImageChange = (fieldName, files, setFieldValue) => {
//       if (files) {
//           console.log("INSIDE");
//           console.log(fieldName, files);
//       setFieldValue(fieldName, [
//         // ...initialValues[fieldName],
//         ...Array.from(files),
//       ]);
//     }
//   };
//   console.log(initialValues);

//   const handleDeleteImage = (setFieldValue) => {
//     setFieldValue("cnicPicture", []);
//   };

//   return (
//     <div className="flex justify-center items-center  p-2">
//       <div className=" w-full rounded-2xl">
//         <Formik
//           initialValues={initialValues}
//           validationSchema={validationSchema}
//           onSubmit={handleSubmit}
//         >
//           {(formik) => (
//             <>
//             {console.log(formik.errors)}
//             {console.log(formik.values)}
//             <Form>
//               <FormikController
//                 control="input"
//                 type="text"
//                 label="First Name"
//                 name="firstName"
//               />
//               <FormikController
//                 control="input"
//                 type="text"
//                 label="Last Name"
//                 name="lastName"
//               />
//               <FormikController
//                 control="input"
//                 type="email"
//                 label="Email"
//                 name="email"
//               />
//               <FormikController
//                 control="input"
//                 type="number"
//                 label="Phone number"
//                 name="phoneNumber"
//               />
//               <FormikController
//                 control="input"
//                 type="password"
//                 label="Password"
//                 name="password"
//               />
//               <FormikController
//                 control="input"
//                 type="text"
//                 label="Address"
//                 name="address"
//               />
//               <FileUpload
//                 images={formik.values["cnicPicture"]}
//                 name="cnicPicture"
//                 handleImageChange={(e) => {
//                   handleImageChange(
//                     "cnicPicture",
//                     e.target.files,
//                     formik.setFieldValue
//                   );
//                 }}
//                 handleDeleteImage={() =>
//                   handleDeleteImage(formik.setFieldValue)
//                 }
//               />
//               <Button type="submit" className="w-full">
//                 Submit
//               </Button>
//               <p className="text-sm text-right">
//                 Already have an account?{" "}
//                 <Link to={PATH.LOGIN} className="underline">
//                   Login
//                 </Link>
//               </p>
//             </Form>
//             </>
//           )}
//         </Formik>
//       </div>
//     </div>
//   );
// }

// export default PostAdd;

import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikController from "../../components/formik/formikController";
import Button from "../../components/button";
import { Link } from "react-router-dom";
import { PATH } from "../../utils/path";
import UploadImage from "../../components/fileUpload";

function PostAdd() {
  const initialValues = {
    vehicleName: "",
    vehicleModel: "",
    vehicleNumber: "",
    ownerName: "",
    phoneNumber: "",
    ownerCnic: "",
    cnicPicture: [],
    licenceNumber: "",
    licencePicture: [],
    countryName: "",
    city: "",
    location: "",
    vehicleType: "",
    vehiclePicture: [],
  };

  const validationSchema = Yup.object({
    vehicleName: Yup.string().required("Vehicle name is required"),
    vehicleModel: Yup.string().required("Vehicle model is required"),
    vehicleNumber: Yup.string().required("Vehicle number is required"),
    ownerName: Yup.string().required("Owner name is required"),
    phoneNumber: Yup.string().required("Phone number is required"),
    ownerCnic: Yup.string()
      .required("Owner CNIC is required")
      .matches(/^\d{13}$/, "CNIC must be 13 digits"),
    cnicPicture: Yup.array().min(1, "CNIC picture is required").required(),
    licenceNumber: Yup.string().required("Licence number is required"),
    licencePicture: Yup.array()
      .min(1, "Licence picture is required")
      .required(),
    countryName: Yup.string().required("Country name is required"),
    city: Yup.string().required("City is required"),
    location: Yup.string().required("Location is required"),
    vehicleType: Yup.string().required("Vehicle type is required"),
    vehiclePicture: Yup.array()
      .min(4, "Vehicle Pictures is required")
      .required(),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  const handleImageChange = (fieldName, files, formik) => {
    formik.setFieldValue(fieldName, [...formik.values[fieldName],...Array.from(files)]);
  };

  const handleDeleteImage = (index, fieldName, formik) => {
    const newImages = formik.values[fieldName].filter((_, i) => i !== index);
    formik.setFieldValue(fieldName, newImages);
  };

  return (
    <div className="flex justify-center items-center  p-2">
      <div className="w-full max-w-lg bg-white ">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {(formik) => (
            <>
            <Form>
              <FormikController
                control="input"
                type="text"
                label="Vehicle Name"
                name="vehicleName"
              />
              <FormikController
                control="input"
                type="text"
                label="Vehicle Model"
                name="vehicleModel"
              />
              <FormikController
                control="input"
                type="text"
                label="Vehicle Number"
                name="vehicleNumber"
              />
              <FormikController
                control="input"
                type="text"
                label="Owner Name"
                name="ownerName"
              />
              <FormikController
                control="input"
                type="number"
                label="Phone Number"
                name="phoneNumber"
              />
              <FormikController
                control="input"
                type="text"
                label="Owner CNIC"
                name="ownerCnic"
              />
              <div>
                <p className="block text-sm font-semibold text-gray-700 mb-1">
                  Upload CNIC Picture
                </p>
                <UploadImage
                  images={formik.values.cnicPicture}
                  name="cnicPicture"
                  handleImageChange={(name, files) =>
                    handleImageChange(name, files, formik)
                  }
                  handleDeleteImage={(index) =>
                    handleDeleteImage(index, "cnicPicture", formik)
                  }
                />
                {formik.touched.cnicPicture && (
                  <p className="text-red-900 font-inter text-sm">
                    {formik.errors.cnicPicture}
                  </p>
                )}
              </div>
              <FormikController
                control="input"
                type="text"
                label="Licence Number"
                name="licenceNumber"
              />
              <div>
                <p className="block text-sm font-semibold text-gray-700 mb-1">
                  Upload Licence Picture
                </p>
                <UploadImage
                  images={formik.values.licencePicture}
                  name="licencePicture"
                  handleImageChange={(name, files) =>
                    handleImageChange(name, files, formik)
                  }
                  handleDeleteImage={(index) =>
                    handleDeleteImage(index, "licencePicture", formik)
                  }
                />
                {formik.touched.licencePicture && (
                  <p className="text-red-900 font-inter text-sm">
                    {formik.errors.licencePicture}
                  </p>
                )}
              </div>
              <FormikController
                control="input"
                type="text"
                label="Country Name"
                name="countryName"
              />
              <FormikController
                control="input"
                type="text"
                label="City"
                name="city"
              />
              <FormikController
                control="input"
                type="text"
                label="Location"
                name="location"
              />
              <FormikController
                control="input"
                type="text"
                label="Vehicle Type"
                name="vehicleType"
              />
              <div>
                <p className="block text-sm font-semibold text-gray-700 mb-1">
                  Upload Vehicle Picture
                </p>
                <UploadImage
                  images={formik.values.vehiclePicture}
                  name="vehiclePicture"
                  handleImageChange={(name, files) =>
                    handleImageChange(name, files, formik)
                  }
                  handleDeleteImage={(index) =>
                    handleDeleteImage(index, "vehiclePicture", formik)
                  }
                />
                {formik.touched.vehiclePicture && (
                  <p className="text-red-500 font-inter text-sm">
                    {formik.errors.vehiclePicture}
                  </p>
                )}
              </div>
              <Button type="submit" className="w-full mt-4">
                Post
              </Button>
            </Form>
            </>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default PostAdd;


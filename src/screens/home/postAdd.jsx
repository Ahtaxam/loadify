import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";

import {
  CountrySelect,
  CitySelect,
  StateSelect,
  GetCity,
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";

import * as Yup from "yup";
import FormikController from "../../components/formik/formikController";
import Button from "../../components/button";
import { Link } from "react-router-dom";
import { PATH } from "../../utils/path";
import UploadImage from "../../components/fileUpload";
import { OPTIONS } from "../../utils/data";

function PostAdd() {
  const [countryid, setCountryid] = useState(0);
  const [stateid, setstateid] = useState(0);
  const [cityList, setCityList] = useState([]);

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
    stateName: "",
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
    stateName: Yup.string().required("State name is required"),
    city: Yup.string().required("City is required"),
    location: Yup.string().required("Location is required"),
    vehicleType: Yup.string().required("Vehicle type is required"),
    vehiclePicture: Yup.array()
      .min(4, "Vehicle 4 Pictures is required")
      .required(),
  });

  useEffect(() => {
    GetCity(countryid, stateid).then((result) => {
      console.log(result);
      setCityList(result);
    });
  }, [countryid, stateid]);

  const handleSubmit = (values) => {
    console.log(values);
  };

  const handleImageChange = (fieldName, files, formik) => {
    formik.setFieldValue(fieldName, [
      ...formik.values[fieldName],
      ...Array.from(files),
    ]);
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

                <div className="mb-4">
                  <label
                    htmlFor="countryName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Country Name
                  </label>
                  <CountrySelect
                    value={formik.values.countryName}
                    onChange={(e) => {
                      setCountryid(e.id);
                      formik.setFieldValue("countryName", e.name);
                      formik.setFieldValue("stateName", "");
                      formik.setFieldValue("city", "");
                    }}
                  />
                  {formik.touched.countryName && formik.errors.countryName ? (
                    <div className="text-red-600 text-sm">
                      {formik.errors.countryName}
                    </div>
                  ) : null}
                </div>

                {/* state */}
                <div className="mb-4">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700"
                  >
                    State Name
                  </label>
                  <StateSelect
                    value={formik.values.stateName}
                    countryid={countryid}
                    onChange={(e) => {
                      setstateid(e.id);
                      formik.setFieldValue("stateName", e.name);
                      formik.setFieldValue("city", "");
                    }}
                  />
                  {formik.touched.city && formik.errors.stateName ? (
                    <div className="text-red-600 text-sm">
                      {formik.errors.stateName}
                    </div>
                  ) : null}
                </div>

                {/* city name */}
                <FormikController
                  control="select"
                  type="text"
                  label="City Name"
                  name="city"
                  options={cityList}
                />
               
                <FormikController
                  control="input"
                  type="text"
                  label="Location"
                  name="location"
                />
                <FormikController
                  control="select"
                  type="text"
                  label="Vehicle Type"
                  name="vehicleType"
                  options={OPTIONS}
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
import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import {
  CountrySelect,
  CitySelect,
  StateSelect,
  GetCity,
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
import * as Yup from "yup";
import FormikController from "../../../components/formik/formikController";
import Button from "../../../components/button";
import UploadImage from "../../../components/fileUpload";
import { INVENTORYOPTIONS, OPTIONS } from "../../../utils/data";
import axios from "axios";
import { toast } from "react-toastify";
import { getToken } from "../../../utils/currentUser";
import { useDispatch } from "react-redux";
import {
  inventoryAddApi,
  useGetSingleInventoryQuery,
} from "../../../redux/api/inventoryAdd";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../../utils/path";
import { FaTrash } from "react-icons/fa";

const { VITE_BASE_URL } = import.meta.env;

function UpdateInventoryAdd({ id }) {
  const { data, isLoading } = useGetSingleInventoryQuery(id);

  const [countryid, setCountryid] = useState(0);
  const [stateid, setStateid] = useState(0);
  const [cityList, setCityList] = useState([]);
  const [loading, setLoading] = useState(false);
  const token = getToken();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [previousImages, setPreviousImages] = useState(
    data?.data?.inventoryPicture || []
  );

  const initialValues = {
    inventorySize: data?.data?.inventorySize,
    inventoryWeight: data?.data?.inventoryWeight,
    ownerName: data?.data?.ownerName,
    phoneNumber: data?.data?.phoneNumber,
    countryName: "",
    stateName: "",
    city: "",
    location: data?.data?.location,
    inventoryType: data?.data?.inventoryType,
    inventoryPicture: [],
  };

  const validationSchema = Yup.object({
    inventorySize: Yup.string().required("Inventory size is required"),
    inventoryWeight: Yup.string().required("Inventory weight is required"),
    ownerName: Yup.string().required("Owner name is required"),
    phoneNumber: Yup.string().required("Phone number is required"),
    countryName: Yup.string().required("Country name is required"),
    stateName: Yup.string().required("State name is required"),
    city: Yup.string().required("City is required"),
    location: Yup.string().required("Location is required"),
    inventoryType: Yup.string().required("Inventory type is required"),
    inventoryPicture: Yup.array()
      .min(1, "Inventory picture is required")
      .required(),
  });

  useEffect(() => {
    GetCity(countryid, stateid).then((result) => {
      setCityList(result);
    });
  }, [countryid, stateid]);

  const handleSubmit = async (values) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("inventorySize", values.inventorySize);
    formData.append("inventoryWeight", values.inventoryWeight);
    formData.append("ownerName", values.ownerName);
    formData.append("phoneNumber", values.phoneNumber);
    formData.append("countryName", values.countryName);
    formData.append("stateName", values.stateName);
    formData.append("city", values.city);
    formData.append("location", values.location);
    formData.append("inventoryType", values.inventoryType);
    formData.append("previousImages", JSON.stringify(previousImages));

    values.inventoryPicture.forEach((file, index) => {
      formData.append(`inventoryPicture`, file);
    });

    try {
      const result = await axios({
        method: "PUT",
        url: `${VITE_BASE_URL}/inventory/updateadd/${id}`,
        data: formData,
        headers: {
          "Content-Type": `multipart/form-data`,
          Authorization: `Bearer ${token}`,
        },
      });
      if (result.status === 200) {
        toast.success(result.data.message);
        setLoading(false);
        navigate(PATH.MYADDS);
        dispatch(inventoryAddApi.util.invalidateTags(["Inventory"]));
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error(error?.response?.data?.message || "SERVER ERROR: ");
      console.log(error.response.data.message);
    }
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

  const onDelete = (index) => {
    const newState = previousImages.filter((_, i) => i !== index);
    setPreviousImages(newState);
  };

  return (
    <>
      <p className="text-xl text-center font-bold">Update Inventory Add</p>
      <div className="flex justify-center items-center p-2">
        <div className="w-full max-w-lg bg-white">
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
                  label="Inventory Size"
                  name="inventorySize"
                />
                <FormikController
                  control="input"
                  type="text"
                  label="Inventory Weight"
                  name="inventoryWeight"
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
                <div className="mb-4">
                  <label
                    htmlFor="stateName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    State Name
                  </label>
                  <StateSelect
                    value={formik.values.stateName}
                    countryid={countryid}
                    onChange={(e) => {
                      setStateid(e.id);
                      formik.setFieldValue("stateName", e.name);
                      formik.setFieldValue("city", "");
                    }}
                  />
                  {formik.touched.stateName && formik.errors.stateName ? (
                    <div className="text-red-600 text-sm">
                      {formik.errors.stateName}
                    </div>
                  ) : null}
                </div>
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
                  label="Inventory Type"
                  name="inventoryType"
                  options={INVENTORYOPTIONS}
                />
                <div>
                  <p className="block text-sm font-semibold text-gray-700 mb-1">
                    Upload Inventory Picture
                  </p>
                  <UploadImage
                    images={formik.values.inventoryPicture}
                    name="inventoryPicture"
                    handleImageChange={(name, files) =>
                      handleImageChange(name, files, formik)
                    }
                    handleDeleteImage={(index) =>
                      handleDeleteImage(index, "inventoryPicture", formik)
                    }
                  />
                  {formik.touched.inventoryPicture && (
                    <p className="text-red-500 font-inter text-sm">
                      {formik.errors.inventoryPicture}
                    </p>
                  )}
                  <p className="mt-4 font-bold">Previous uploaded Pictures</p>
                  <div className="flex gap-4 flex-wrap">
                    {previousImages.map((image, i) => (
                      <div key={i} className="flex-shrink-0 relative">
                        <img
                          src={image}
                          alt={`image-${i}`}
                          className="w-40 h-40 object-cover rounded-lg"
                        />
                        <button
                          type="button"
                          onClick={() => onDelete(i)}
                          className="absolute top-1 right-1 bg-white p-1 rounded-full shadow-md hover:bg-red-500 hover:text-white"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <Button type="submit" className="w-full mt-4">
                  {loading ? "Updating..." : "Update"}
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}

export default UpdateInventoryAdd;

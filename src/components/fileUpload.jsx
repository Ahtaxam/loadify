// import { FileInput, Label } from "flowbite-react";
// import { useRef } from "react";
// import removeIcon from "../assets/images/remove.png"

// function FileUpload({ name, handleImageChange, images, handleDeleteImage }) {
//     console.log(name, "NAME UPLOADER");
//   const imgRef = useRef();

//   return (
//     <div className="grid grid-cols-3 gap-4">
//       <div className="flex w-full items-center justify-center">
//         <Label
//           htmlFor="dropzone-file"
//           className="flex h-36 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
//         >
//           <div className="flex flex-col items-center justify-center pb-6 pt-5">
//             <svg
//               className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 20 16"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
//               />
//             </svg>
//             <p>upload image</p>
//           </div>
//           <input
//             type="file"
//             ref={imgRef}
//             name={name}
//             id="dropzone-file"
//             htmlFor={name}

//             multiple
//             className="hidden"
//             onChange={(e) => {
//               handleImageChange(e);

//             //   imgRef.current.value = "";
//             }}
//           />
//         </Label>
//       </div>
//       <div>
//         {images.map((obj, i) => (
//           <div key={i} className="relative rounded-lg">
//             <img
//               src={URL.createObjectURL(obj)}
//               alt="image"
//               className="h-36 object-cover rounded-lg w-[100%]"
//             />
//             <div
//               className="border bg-white border-white absolute -top-0.5 -right-0.5 rounded-full cursor-pointer"
//               onClick={() => handleDeleteImage(i)}
//             >
//               <img src={removeIcon} alt="remove" className="size-5" />
//               {/* <MdDelete
//            className=" cursor-pointer text-red-500 text-xl"

//            /> */}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default FileUpload;

import React, { useState } from "react";

const UploadImage = ({
  images,
  name,
  handleImageChange,
  handleDeleteImage,
}) => {
  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files) {
      handleImageChange(name, files);
    }
  };

  const handleDelete = (index) => {
    handleDeleteImage(index);
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      <div>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
          id={`upload-${name}`}
          
        />
        <label htmlFor={`upload-${name}`} className="cursor-pointer">
          <div className="border-dashed border-2 border-gray-300 p-4 h-36 flex items-center justify-center">
            <p>Upload Images</p>
          </div>
        </label>
      </div>
      <div className="col-span-2">
        <div className="mt-2 grid grid-cols-2 gap-3">
          {images.map((preview, index) => (
            <div key={index} className="relative">
              <img
                src={URL.createObjectURL(preview)}
                alt="preview"
                className="object-cover w-full h-32"
              />
              <button
                type="button"
                onClick={() => handleDelete(index)}
                className="absolute top-0 right-0 p-1 bg-red-500 text-white rounded-full"
              >
                &times;
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UploadImage;

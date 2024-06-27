import React from "react";
import NavbarComponent from "../../components/navbar";
import FooterComponent from "../../components/footer";

function ContactUs() {
  return (
    <>
      <NavbarComponent />
      <div className="relative h-[600px] w-full">
        <img
          src="https://aurac.com/storage/contact-us.webp"
          alt="background"
          className="h-full w-full object-cover"
        />
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 px-4 py-2 rounded">
          <p className="text-white text-2xl font-bold">Contact Us</p>
        </div>
      </div>

      {/* <div className="max-w-[500px] mt-[50px] ml-[100px] py-8">
        <p className="text-4xl mb-4 text-gray-400">Contact US</p>
        <p>
          For inquiries regarding our services, support, or any other questions,
          please use the following channels to reach us. For urgent matters,
          kindly contact our hotline. If you're reaching out outside of our
          operating hours, please leave a message and we will return your call
          at the earliest possible opportunity.
        </p>
      </div> */}

      <div className="max-w-3xl mx-auto mt-12 p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Get in Touch</h2>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Your Message"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="max-w-3xl mt-12 p-6 bg-white  rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          Contact Information
        </h2>
        <p className="mb-4">
          For inquiries regarding our services, support, or any other questions,
          please use the following channels to reach us. For urgent matters,
          kindly contact our hotline. If you're reaching out outside of our
          operating hours, please leave a message and we will return your call
          at the earliest possible opportunity.
        </p>
        <p className="text-gray-700">
          Phone: +1-123-456-7890
          <br />
          Email: info@example.com
          <br />
          Address: 123 Main Street, City, Country
        </p>
      </div>
      <FooterComponent/>
    </>
  );
}

export default ContactUs;

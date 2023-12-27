import React, { useState } from "react";
import NavBar from "./NavBar";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const validate = () => {
    let isValid = true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (formData.name.length < 3) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: "Name should be at least 3 letters",
      }));
      isValid = false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, name: "" }));
    }

    if (!emailRegex.test(formData.email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Invalid email address",
      }));
      isValid = false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phone: "Phone should be a 10-digit number",
      }));
      isValid = false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, phone: "" }));
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert(`Form Submission successful
      ${formData.name}
      ${formData.email}
      ${formData.phone}
      `);

      formData.name = "";
      formData.email = "";
      formData.phone = "";
    } else {
      console.log("Form validation failed");
    }
  };

  return (
    <>
      <NavBar />
      <div className="mt-10">
        <p className="text-4xl font-bold inline">Contact</p>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-4 mt-5">
            <input
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              name="name"
              className="w-[400px] px-2 rounded-md text-lg font-semibold h-[35px] text-black"
              placeholder="Name..."
            />
            <span className="text-sm text-red-500 ml-1">{errors.name}</span>

            <input
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              name="email"
              className="w-[400px] px-2 rounded-md text-lg font-semibold h-[35px] text-black"
              placeholder="Email..."
            />
            <span className="text-sm text-red-500 ml-1">{errors.email}</span>

            <input
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              name="phone"
              className="w-[400px] px-2 rounded-md text-lg font-semibold h-[35px] text-black"
              placeholder="Phone..."
            />
            <span className="text-sm text-red-500 ml-1">{errors.phone}</span>
          </div>
          <button className="bg-sky-500 mt-3 flex m-auto justify-end py-0.5 px-4 rounded-md ">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactPage;

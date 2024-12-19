import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddNewSchool() {
  const [formValue, setFormValue] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    contact: "",
    image: "",
    email_id: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const allInput = {
      name: formValue.name,
      address: formValue.address,
      city: formValue.city,
      state: formValue.state,
      contact: formValue.contact,
      image: formValue.image,
      email_id: formValue.email_id,
    };
    // school/new/register
    try {
      let res = await fetch("http://localhost:8080/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(allInput),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      let resjson = await res.json();

      if (resjson) {
        toast.success("New school registered successfully!");
        setFormValue({
          name: "",
          address: "",
          city: "",
          state: "",
          contact: "",
          image: "",
          email_id: "",
        });
      } else {
        toast.error("Some error occurred!");
      }
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4 bg-white shadow-lg rounded-md">
      <ToastContainer position="top-center" autoClose={3000} />
      <h2 className="text-3xl font-semibold text-center mb-6">Add New School</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-lg font-medium">
            School Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formValue.name}
            onChange={handleInput}
            className="p-2 border rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="address" className="text-lg font-medium">
            Address:
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formValue.address}
            onChange={handleInput}
            className="p-2 border rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="city" className="text-lg font-medium">
            City:
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formValue.city}
            onChange={handleInput}
            className="p-2 border rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="state" className="text-lg font-medium">
            State:
          </label>
          <input
            type="text"
            id="state"
            name="state"
            value={formValue.state}
            onChange={handleInput}
            className="p-2 border rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="contact" className="text-lg font-medium">
            Contact:
          </label>
          <input
            type="text"
            id="contact"
            name="contact"
            value={formValue.contact}
            onChange={handleInput}
            className="p-2 border rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="image" className="text-lg font-medium">
            Image URL:
          </label>
          <input
            type="text"
            id="image"
            name="image"
            value={formValue.image}
            onChange={handleInput}
            className="p-2 border rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email_id" className="text-lg font-medium">
            Email ID:
          </label>
          <input
            type="email"
            id="email_id"
            name="email_id"
            value={formValue.email_id}
            onChange={handleInput}
            className="p-2 border rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddNewSchool;

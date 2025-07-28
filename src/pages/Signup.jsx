import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Signup() {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Username: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "user", // default role
  });
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = signup(formData);
    if (result.error) {
      setError(result.error);
      setTimeout(() => {
        navigate("/login");
      }, 2000); // after 2s, redirect to login
    } else {
      navigate("/");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-4 text-pink-600">
          Create Account
        </h2>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="Username"
            onChange={handleChange}
            required
            placeholder="User Name"
            className="w-full border px-4 py-2 rounded focus:ring-pink-500"
          />
          <input
            name="email"
            onChange={handleChange}
            type="email"
            required
            placeholder="Email"
            className="w-full border px-4 py-2 rounded focus:ring-pink-500"
          />
          <input
            name="phone"
            onChange={handleChange}
            required
            placeholder="Phone Number"
            className="w-full border px-4 py-2 rounded focus:ring-pink-500"
          />
          {/* <input
            name="city"
            onChange={handleChange}
            type="text"
            required
            placeholder="City"
            className="w-full border px-4 py-2 rounded focus:ring-pink-500"
          /> */}
          {/* <input
            name="state"
            onChange={handleChange}
            required
            placeholder="State"
            className="w-full border px-4 py-2 rounded focus:ring-pink-500"
          /> */}
          {/* <input
            name="zip"
            onChange={handleChange}
            required
            placeholder="Zip Code"
            className="w-full border px-4 py-2 rounded focus:ring-pink-500"
          /> */}
          {/* <input
            name="country"
            onChange={handleChange}
            required
            placeholder="Country"
            className="w-full border px-4 py-2 rounded focus:ring-pink-500"
          /> */}
          <input
            name="password"
            onChange={handleChange}
            type="password"
            required
            placeholder="Password"
            className="w-full border px-4 py-2 rounded focus:ring-pink-500"
          />
          <input
            name="confirm_password"
            onChange={handleChange}
            type="password"
            required
            placeholder="Confirm Password"
            className="w-full border px-4 py-2 rounded focus:ring-pink-500"
          />
          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700"
          >
            Sign Up
          </button>
        </form>
        <p className="text-sm mt-3 text-center text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-pink-600">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default Signup;

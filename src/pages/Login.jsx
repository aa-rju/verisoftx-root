import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";

function Login() {
  const { login, resetPassword } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = login(formData);
    if (result.error) {
      setError(result.error);
    } else {
      setMessage("");
      setError("");
      navigate(from, { replace: true });
    }
  };

  const handleForgotPassword = () => {
    const result = resetPassword(formData.email);
    if (result.error) {
      setMessage(result.error);
    } else {
      setMessage(result.success);
    }
  };

  return (
    <div className="flex justify-center items-top mt-8 bg-gray-100">
      <div className=" max-w-md bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-4 text-pink-600">Login</h2>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        {message && <p className="text-green-600 mb-2">{message}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="email"
            onChange={handleChange}
            type="email"
            required
            placeholder="Email"
            className="w-full border px-4 py-2 rounded focus:ring-pink-500"
          />
          <input
            name="password"
            onChange={handleChange}
            type="password"
            required
            placeholder="Password"
            className="w-full border px-4 py-2 rounded focus:ring-pink-500"
          />
          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700"
          >
            Sign in
          </button>
        </form>
        <div className="flex justify-between mt-3 text-sm text-gray-600">
          <button
            onClick={handleForgotPassword}
            className="text-pink-600 hover:underline"
          >
            Forgot Password?
          </button>
          <a href="/signup" className="text-pink-600 hover:underline">
            Create an Account
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;

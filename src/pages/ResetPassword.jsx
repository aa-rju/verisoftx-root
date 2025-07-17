import React, { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

export default function ResetPassword() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const token = searchParams.get("token"); // reset token from URL
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const validatePassword = (pwd) => pwd.length >= 6; // basic check, add more if needed

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!validatePassword(password)) {
      setError("Password must be at least 6 characters.");
      return;
    }
    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }
    if (!token) {
      setError("Invalid or missing reset token.");
      return;
    }

    // TODO: call backend to reset password with token
    // Example:
    // await api.post('/auth/reset-password', { token, password });

    // For demo simulate success:
    setSuccess(true);

    // Redirect to login after 3 sec
    setTimeout(() => {
      navigate("/login");
    }, 3000);
  };

  if (success) {
    return (
      <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded shadow text-center">
        <h2 className="text-2xl font-bold mb-4 text-pink-600">
          Password Reset Successful
        </h2>
        <p>You will be redirected to login shortly.</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-6 text-pink-600">
        Reset Your Password
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="password" className="block font-semibold mb-1">
            New Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-pink-600"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
          />
        </div>
        <div>
          <label htmlFor="confirm" className="block font-semibold mb-1">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirm"
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-pink-600"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            required
            minLength={6}
          />
        </div>
        {error && <p className="text-red-600">{error}</p>}
        <button
          type="submit"
          className="w-full bg-pink-600 text-white py-3 rounded hover:bg-pink-700 transition"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
}

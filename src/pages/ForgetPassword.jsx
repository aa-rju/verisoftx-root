import React, { useState } from "react";

export default function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    // Simple email regex
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // TODO: Call your backend API to trigger password reset email
    // Example: await api.post('/auth/forgot-password', { email })

    // For demo, simulate success:
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded shadow">
        <h2 className="text-xl font-semibold mb-4 text-pink-600">
          Check Your Email
        </h2>
        <p className="text-gray-700">
          If an account with <strong>{email}</strong> exists, we’ve sent a
          password reset link. Please check your inbox.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-6 text-pink-600">
        Forgot Your Password?
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block font-semibold mb-1">
            Email address
          </label>
          <input
            type="email"
            id="email"
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-pink-600"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {error && <p className="text-red-600 mt-1">{error}</p>}
        </div>
        <button
          type="submit"
          className="w-full bg-pink-600 text-white py-3 rounded hover:bg-pink-700 transition"
        >
          Send Reset Link
        </button>
      </form>
    </div>
  );
}

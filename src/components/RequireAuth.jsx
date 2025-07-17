import React from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useLocation } from "react-router-dom";

function RequireAuth({ children }) {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return (
      <div className="max-w-xl mx-auto mt-24 text-center p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          You're not logged in
        </h2>
        <p className="text-gray-600 mb-6">
          Please log in to view this page and continue your activity.
        </p>
        <Link
          to="/login"
          state={{ from: location }}
          className="inline-block px-6 py-2 bg-pink-600 text-white rounded-md font-medium hover:bg-pink-700 transition"
        >
          Login to Continue
        </Link>
      </div>
    );
  }

  return children;
}

export default RequireAuth;

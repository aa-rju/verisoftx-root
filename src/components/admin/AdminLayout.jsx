// src/components/admin/AdminLayout.jsx
import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function AdminLayout() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`bg-white border-r border-gray-300 transition-all duration-300 ${
          sidebarOpen ? "w-64" : "w-16"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-300">
          <h1
            className={`text-xl font-bold text-pink-600 ${
              sidebarOpen ? "block" : "hidden"
            }`}
          >
            Admin Panel
          </h1>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-gray-600 hover:text-pink-600"
            aria-label="Toggle sidebar"
          >
            {sidebarOpen ? "←" : "→"}
          </button>
        </div>

        <nav className="flex flex-col mt-4 space-y-2 px-2">
          <Link
            to="/admin"
            className="block px-3 py-2 rounded hover:bg-pink-100 hover:text-pink-600 font-medium"
          >
            Dashboard
          </Link>
          <Link
            to="/admin/products"
            className="block px-3 py-2 rounded hover:bg-pink-100 hover:text-pink-600 font-medium"
          >
            Products
          </Link>
          <Link
            to="/admin/orders"
            className="block px-3 py-2 rounded hover:bg-pink-100 hover:text-pink-600 font-medium"
          >
            Orders
          </Link>
          <Link
            to="/admin/users"
            className="block px-3 py-2 rounded hover:bg-pink-100 hover:text-pink-600 font-medium"
          >
            Users
          </Link>
          {/* Add more links as needed */}
        </nav>

        <button
          onClick={handleLogout}
          className="mt-auto m-4 w-[calc(100%-1rem)] bg-pink-600 text-white py-2 rounded hover:bg-pink-700 transition"
        >
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}

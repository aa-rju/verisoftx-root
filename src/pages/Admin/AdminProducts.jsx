import React from "react";
import { Link } from "react-router-dom";

function AdminProducts() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Product Management</h1>
      <Link
        to="/admin/products/add"
        className="inline-block mb-4 px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700"
      >
        + Add New Product
      </Link>
      <p className="text-gray-600">Product list will be shown here.</p>
    </div>
  );
}

export default AdminProducts;

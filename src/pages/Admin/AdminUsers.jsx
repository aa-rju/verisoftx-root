// src/pages/AdminUsers.jsx

import Topbar from "../../components/admin/Topbar";
import { useState } from "react";

export default function AdminUsers() {
  const [users, setUsers] = useState([
    { id: 1, name: "Aarju Mahata", email: "aarju@example.com", role: "user" },
    { id: 2, name: "Sita Rai", email: "sita@example.com", role: "admin" },
  ]);

  const toggleRole = (id) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id
          ? { ...user, role: user.role === "admin" ? "user" : "admin" }
          : user
      )
    );
  };

  const deleteUser = (id) => {
    const confirm = window.confirm("Are you sure you want to delete this user?");
    if (confirm) setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  return (
    <div className="ml-64 min-h-screen bg-gray-100">
      <Topbar />
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Manage Users</h2>
        <div className="bg-white shadow rounded p-4 overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="p-2">ID</th>
                <th className="p-2">Name</th>
                <th className="p-2">Email</th>
                <th className="p-2">Role</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.id} className="border-b hover:bg-gray-50">
                  <td className="p-2">{u.id}</td>
                  <td className="p-2">{u.name}</td>
                  <td className="p-2">{u.email}</td>
                  <td className="p-2 capitalize">{u.role}</td>
                  <td className="p-2 space-x-2">
                    <button
                      onClick={() => toggleRole(u.id)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded text-sm hover:bg-yellow-600"
                    >
                      Toggle Role
                    </button>
                    <button
                      onClick={() => deleteUser(u.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {users.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center p-4 text-gray-500">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

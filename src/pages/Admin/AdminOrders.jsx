import Topbar from "../../components/admin/Topbar";
import { useState } from "react";

export default function AdminOrders() {
  const [orders, setOrders] = useState([
    {
      id: "ORD1234",
      user: "Aarju Mahata",
      items: 3,
      total: 1200,
      status: "Pending",
      date: "2025-07-25",
    },
    {
      id: "ORD1235",
      user: "Sita Rai",
      items: 1,
      total: 500,
      status: "Shipped",
      date: "2025-07-26",
    },
    // Add more orders
  ]);

  const changeStatus = (id) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === id
          ? {
              ...order,
              status:
                order.status === "Pending"
                  ? "Shipped"
                  : order.status === "Shipped"
                  ? "Delivered"
                  : order.status,
            }
          : order
      )
    );
  };

  const deleteOrder = (id) => {
    const confirm = window.confirm("Are you sure you want to delete this order?");
    if (confirm) {
      setOrders((prev) => prev.filter((order) => order.id !== id));
    }
  };

  return (
    <div className="ml-64 min-h-screen bg-gray-100">
      <Topbar />
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Manage Orders</h2>

        <div className="bg-white shadow rounded p-4 overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="p-2">Order ID</th>
                <th className="p-2">User</th>
                <th className="p-2">Items</th>
                <th className="p-2">Total (Rs)</th>
                <th className="p-2">Status</th>
                <th className="p-2">Date</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b hover:bg-gray-100">
                  <td className="p-2">{order.id}</td>
                  <td className="p-2">{order.user}</td>
                  <td className="p-2">{order.items}</td>
                  <td className="p-2">Rs. {order.total}</td>
                  <td className="p-2">
                    <span
                      className={`text-sm font-semibold px-2 py-1 rounded ${
                        order.status === "Pending"
                          ? "bg-yellow-200 text-yellow-800"
                          : order.status === "Shipped"
                          ? "bg-blue-200 text-blue-800"
                          : "bg-green-200 text-green-800"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="p-2">{order.date}</td>
                  <td className="p-2 space-x-2">
                    <button
                      className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 text-sm"
                      onClick={() => changeStatus(order.id)}
                    >
                      Update Status
                    </button>
                    <button
                      className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 text-sm"
                      onClick={() => deleteOrder(order.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {orders.length === 0 && (
                <tr>
                  <td colSpan="7" className="text-center p-4 text-gray-500">
                    No orders found.
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

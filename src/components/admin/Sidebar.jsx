import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white fixed">
      <div className="text-2xl font-bold p-4">Admin Panel</div>
      <nav className="mt-6">
        <ul className="space-y-2 px-4">
          <li><Link to="/dashboard" className="hover:bg-gray-700 block p-2 rounded">Dashboard</Link></li>
          <li><Link to="/users" className="hover:bg-gray-700 block p-2 rounded">Users</Link></li>
          <li><Link to="/products" className="hover:bg-gray-700 block p-2 rounded">Products</Link></li>
          <li><Link to="/settings" className="hover:bg-gray-700 block p-2 rounded">Settings</Link></li>
        </ul>
      </nav>
    </div>
  );
}

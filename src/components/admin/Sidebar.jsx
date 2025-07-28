import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const linkClass =
    "block px-4 py-2 rounded hover:bg-pink-100 transition font-medium";

  return (
    <div className="w-60 bg-pink-200 h-screen p-4">
      <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
      <nav className="space-y-2">
        <NavLink to="/admin" className={linkClass}>Dashboard</NavLink>
        <NavLink to="/admin/products" className={linkClass}>Manage Products</NavLink>
        <NavLink to="/admin/orders" className={linkClass}>Manage Orders</NavLink>
        <NavLink to="/admin/offers" className={linkClass}>Manage Offers</NavLink>
      </nav>
    </div>
  );
}

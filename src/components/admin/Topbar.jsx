// src/components/Topbar.jsx

export default function Topbar() {
  return (
    <div className="h-16 bg-white shadow px-6 flex items-center justify-between sticky top-0 z-10 ml-64">
      <h1 className="text-xl font-semibold">Admin Panel</h1>
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Logout</button>
    </div>
  );
}

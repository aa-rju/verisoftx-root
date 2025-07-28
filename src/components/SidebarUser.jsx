import React, { useState } from "react";

const SidebarUser = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="m-4 p-2 bg-pink-600 text-white rounded-md"
      >
        {isOpen ? "Close Menu" : "Open Menu"}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-4" : "-translate-x-full"
        }`}
      >
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Menu</h2>
          <ul className="space-y-3">
            <li className="hover:text-pink-600 cursor-pointer">Home</li>
            <li className="hover:text-pink-600 cursor-pointer">Offers</li>
            <li className="hover:text-pink-600 cursor-pointer">Products</li>
            <li className="hover:text-pink-600 cursor-pointer">Contact</li>
          </ul>
        </div>
      </div>

      {/* Optional Overlay when sidebar is open */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
        />
      )}
    </>
  );
};

export default SidebarUser;

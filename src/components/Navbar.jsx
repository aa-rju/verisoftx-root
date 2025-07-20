import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { ShoppingCart, Menu, X, Search } from "lucide-react";

function Navbar({ searchTerm, setSearchTerm }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  // const [searchTerm, setSearchTerm] = useState("");

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   if (searchTerm.trim()) {
  //     navigate(`/search?query=${searchTerm}`);
  //     setSearchTerm("");
  //     setIsOpen(false); // close mobile menu on search
  //   }
  // };

  return (
    <nav className="bg-secondary2 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Logo */}
          <div className="flex justify-center py-4">
            <Link to="/" className="text-2xl font-bold text-pink-600">
              DogFood
            </Link>
          </div>

          {/* Desktop nav and search */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Search bar (desktop) */}
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-4 py-1 pr-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-pink-600"
              >
                <Search size={16} />
              </button>

            {/* Nav links */}
            <Link to="/" className="text-gray-700 hover:text-pink-600">
              Home
            </Link>
            {/* <Link to="/shop" className="text-gray-700 hover:text-pink-600">
              Shop
            </Link> */}
            <Link
              to="/cart"
              className="text-gray-700 hover:text-pink-600 flex items-center gap-1"
            >
              <ShoppingCart size={18} />
              Cart
            </Link>
            {user && (
              <Link to="/profile" className="text-gray-700 hover:text-pink-600">
                Profile
              </Link>
            )}
            {user ? (
              <button
                onClick={handleLogout}
                className="text-sm px-4 py-2 rounded bg-gray-100 hover:bg-gray-200"
              >
                Logout
              </button>
            ) : (
              <>
                <Link to="/login" className="text-gray-700 hover:text-pink-600">
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pt-4 pb-4 space-y-2 bg-white shadow-sm ${
    isOpen ? 'translate-x-0' : '-translate-x-full'">
          {/* Search bar (mobile) */}
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 pr-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-pink-600"
            >
              <Search size={18} />
            </button>


          <Link to="/" className="block text-gray-700 hover:text-pink-600">
            Home
          </Link>
          {/* <Link to="/shop" className="block text-gray-700 hover:text-pink-600">
            Shop
          </Link> */}
          <Link to="/cart" className="block text-gray-700 hover:text-pink-600">
            Cart
          </Link>
          {user && (
            <Link
              to="/profile"
              className="block text-gray-700 hover:text-pink-600"
            >
              Profile
            </Link>
          )}
          {user ? (
            <button
              onClick={handleLogout}
              className="block w-full text-left text-gray-700 hover:text-pink-600"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="block text-gray-700 hover:text-pink-600"
              >
                Login
              </Link>
            </>
          )}
        </div>
      )}
      
    </nav>
  );
}

export default Navbar;

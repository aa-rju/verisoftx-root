// Top navigation bar.
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { ShoppingCart, Menu, X } from "lucide-react";
import logo from "../../src/assets/bluedoglogo.png"
// import SidebarUser from "../components/SidebarUser"

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
    <nav className="bg-secondary2 shadow-sm sticky top-0 z-50 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Mobile menu button */}
          {/* <sidebarUser onClick={() => navigate("/offers")}>sidebar</sidebarUser> */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Logo */}
          <div className="flex flex-row justify-center items-center py-4">
            <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="w-32 h-auto bg-transparent" />
            <p className="text-[20px] text-pink-500 font-bold">BlueDogTreats</p>
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
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-pink-500"
              >
                
              </button>

            {/* Nav links */}
            <Link to="/" className="text-gray-700 hover:text-pink-500">
              Home
            </Link>
            {/* <Link to="/shop" className="text-gray-700 hover:text-pink-500">
              Shop
            </Link> */}
            <Link
              to="/cart"
              className="text-gray-700 hover:text-pink-500 flex items-center gap-1"
            >
              <ShoppingCart size={18} />
              Cart
            </Link>
            {user && (
              <Link to="/profile" className="text-gray-700 hover:text-pink-500">
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
                <Link to="/login" className="text-gray-700 hover:text-pink-500">
                  Login
                </Link>
                <Link to="/signup" className="text-gray-700 hover:text-pink-500">
                  Sign up
                </Link>
              </>
              
            )}
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-fit w-40 bg-primary z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >


        <div className="p-4 space-y-4">
                    <button
          className="absolute top-4 right-4 m-0 text-white hover:text-red-500"
          onClick={() => setIsOpen(false)}
        >
         <Menu size={24} />
        </button>
          {/* Search bar */}
          <div className="relative py-8">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 pr-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-pink-500"
            >
              
            </button>
          </div>

          <Link to="/" className="block text-white hover:text-pink-500">
            Home
          </Link>
          <Link to="/cart" className="block text-white hover:text-pink-500">
            Cart
          </Link>

          {user && (
            <Link to="/profile" className="block text-white hover:text-pink-500">
              Profile
            </Link>
          )}
          {user ? (
            <button
              onClick={handleLogout}
              className="block w-full text-left text-white hover:text-pink-600"
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="block text-white hover:text-pink-600">
                Login
              </Link>
              <Link to="/signup" className="block text-white hover:text-pink-500">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>

      
    </nav>
  );
}

export default Navbar;

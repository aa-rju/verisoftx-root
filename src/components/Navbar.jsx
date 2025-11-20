// Top navigation bar.
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { ShoppingCart, Menu, X } from "lucide-react";
import logo from "../../src/assets/logo.png"
import Menuu from "../pages/Menu";
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


  return (
    <nav className="bg-black shadow-sm sticky top-0 z-50 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 ">
          {/* Mobile menu button */}
          {/* <sidebarUser onClick={() => navigate("/offers")}>sidebar</sidebarUser> */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} color="#ff007f" />}
            </button>
          </div>

          {/* Logo */}
          <div className="flex flex-row justify-center items-center py-4">
            <Link to="/home" className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="w-32 h-auto bg-transparent" />
            {/* <p className="text-[20px] text-pink-500 font-bold">BlueDogTreats</p> */}
            </Link>
            </div>


          {/* Desktop nav and search */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-medium hidden md:flex items-center space-x-10 text-xl max-w-full overflow-x-hidden">

            {/* Nav links */}
            <Link to="/home" className="text-color3 hover:text-footer ">
              Home
            </Link>

            <Link to="/menu" className="block text-color3 hover:text-footer">
                Menu
            </Link>
            <Link to="/contact" className="block text-color3 hover:text-footer">
                Contact
            </Link>
            {/* {user && (
              <Link to="/profile" className="text-white hover:text-pink-500">
                Profile
              </Link>
            )} */}
            {/* {user ? (
              <button
                onClick={handleLogout}
                className="text-sm px-4 py-2 rounded bg-gray-100 hover:bg-gray-200"
              >
                Logout
              </button>
            ) : (
              <>
                <Link to="/login" className="text-white hover:text-pink-500">
                  Login
                </Link>
                <Link to="/signup" className="text-white hover:text-pink-500">
                  Sign up
                </Link>
              </>
              
            )} */}
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
        className={`fixed top-0 left-0 h-full w-40 bg-footer z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >


        <div className="p-4 py-8 space-y-4">
                    <button
          className="absolute top-4 right-4 m-0 text-color3 hover:text-color3"
          onClick={() => setIsOpen(false)}
        >
         <X size={24} />
        </button>


          <Link to="/home"
            onClick={() => setIsOpen(false)}
            className="block text-color3 hover:text-color3"
          >
            Home
          </Link>
          {/* <Link to="/cart" className="block text-color3 hover:text-pink-500">
            Cart
          </Link> */}
          <Link to="/menu" onClick={() => setIsOpen(false)} className="block text-color3 hover:text-color3">
                Menu
          </Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block text-color3 hover:text-color3">
                Contact
          </Link>

          {/* {user && (
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
          )} */}
        </div>
      </div>

      
    </nav>
  );
}

export default Navbar;

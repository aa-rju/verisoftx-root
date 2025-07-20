import React,{useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import ForgetPassword from "./pages/ForgetPassword";
import ResetPassword from "./pages/ResetPassword";

// Admin Components
import AdminRequireAuth from "./components/AdminRequireAuth";
import AdminLayout from "./components/admin/AdminLayout";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminProducts from "./pages/Admin/AdminProducts";
// import AddProduct from "./pages/Admin/AddProduct";
import EditProduct from "./pages/Admin/EditProduct";
import AdminOrders from "./pages/Admin/AdminOrders";
import AdminUsers from "./pages/Admin/AdminUsers";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Router>
        <div className="bg-secondary4 min-h-screen text-gray-800">
          <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          
          <div className="px-4 py-6">
            <Routes>
              <Route path="/" element={<Home searchTerm={searchTerm} />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route
                path="/cart"
                element={
                  <ProtectedRoute>
                    <Cart />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />
              <Route path="/forgetpassword" element={<ForgetPassword />} />
              <Route path="/resetpassword" element={<ResetPassword />} />

              {/* Admin Routes (Protected) */}
              <Route
                path="/admin"
                element={
                  <AdminRequireAuth>
                    <AdminLayout />
                  </AdminRequireAuth>
                }
              >
                <Route index element={<AdminDashboard />} />
                <Route path="products" element={<AdminProducts />} />
                {/* <Route path="products/add" element={<AddProduct />} /> */}
                <Route path="products/edit/:id" element={<EditProduct />} />
                <Route path="orders" element={<AdminOrders />} />
                <Route path="users" element={<AdminUsers />} />
                {/* Add more admin routes as needed */}
              </Route>
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;

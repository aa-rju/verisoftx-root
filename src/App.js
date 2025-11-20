// Main component, sets up routing and layout.
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import SocialLinks from "./components/SocialLinks";
import EntryPage from "./components/EntryPage";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
// import Profile from "./pages/Profile";
import ForgetPassword from "./pages/ForgetPassword";
import ResetPassword from "./pages/ResetPassword";
import Services from "./components/Services";
import Contact from "./pages/Contact";

// footer pages
import AboutUs from "./pages/Footer/AboutUs";
import FAQ from "./pages/Footer/FAQs";
import TreatDeals from "./pages/Footer/TreatDeals";
import SubscribeandSave from "../src/pages/Footer/SubscribeandSave";
import ChewSelector from "./pages/Footer/ChewSelector";
import Referralpoints from "./pages/Footer/Referralpoints";
import TermsofService from "./pages/Footer/TermsofService";
import PrivacyPolicy from "./pages/Footer/PrivacyPolicy";
import RefundPolicy from "./pages/Footer/RefundPolicy";
import ConsumerPrivacyAct from "./pages/Footer/ConsumerPrivacyAct";
import Resources from "./pages/Footer/Resources";
import ContactUs from "./pages/Footer/ContactUs";

// Admin Components
import AdminLayout from "./components/admin/AdminLayout";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminProducts from "./pages/Admin/AdminProducts";
import AdminOrders from "./pages/Admin/AdminOrders";
import AdminUsers from "./pages/Admin/AdminUsers";

function LayoutWrapper({ children }) {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");

  // Hide Navbar, SocialLinks, and Footer on entry page
  const hideLayout = location.pathname === "/";

  return (
    <div className="bg-secondary6 min-h-screen text-gray-800">
      {!hideLayout && <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />}
      {!hideLayout && <SocialLinks />}

      <div className="px-0 py-0 ">{children}</div>

      {!hideLayout && <Footer />}
    </div>
  );
}

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Router>
        <LayoutWrapper>
          <Routes>
            <Route path="/" element={<EntryPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />

            {/* footer pages */}
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/chewselector" element={<ChewSelector />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/referralpoints" element={<Referralpoints />} />
            <Route path="/subscribeandsave" element={<SubscribeandSave />} />
            <Route path="/treatdeals" element={<TreatDeals />} />
            <Route path="/termsofservice" element={<TermsofService />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/refundpolicy" element={<RefundPolicy />} />
            <Route path="/consumerprivacyact" element={<ConsumerPrivacyAct />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contactus" element={<ContactUs />} />

            <Route
              path="/cart"
              element={
                <ProtectedRoute>
                  <Cart />
                </ProtectedRoute>
              }
            />

            <Route path="/forgetpassword" element={<ForgetPassword />} />
            <Route path="/resetpassword" element={<ResetPassword />} />

            {/* Admin Routes */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
              <Route path="products" element={<AdminProducts />} />
              <Route path="orders" element={<AdminOrders />} />
              <Route path="users" element={<AdminUsers />} />
            </Route>
          </Routes>
        </LayoutWrapper>
      </Router>
    </>
  );
}

export default App;

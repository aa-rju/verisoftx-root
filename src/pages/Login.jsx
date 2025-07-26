import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Popup from "../components/popups";



// Simple email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function Login() {

  // popup
  const [popup, setPopup] = useState({ show:false, type:"error", message:""});

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/profile";
  const { login } = useAuth();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  // Popup state
  const [showSignupPopup, setShowSignupPopup] = useState(false);
  const [signupEmail, setSignupEmail] = useState("");
  const [signupError, setSignupError] = useState("");
  const [otpSent, setOtpSent] = useState(false);

// otp verification state
  const [enteredOtp, setEnteredOtp] = useState("");
  const [otpVerifyError, setOtpVerifyError] = useState("");
  const [verified, setVerified] = useState(false);

  // store email for OTP
  const [otpEmail, setOtpEmail] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const result = await login(formData);
    if (result.success) {
      navigate(from, { replace: true });
    } else {
      setPopup({ show: true, type:"error", message: result.error || "Login failed. Please try again."});
    }
  };

  // Signup popup handlers
  const handleSignupClick = (e) => {
    e.preventDefault();
    setShowSignupPopup(true);
    setSignupError("");
    setOtpSent(false);
  };

  const handleSignupEmailChange = (e) => {
    setSignupEmail(e.target.value);
    setSignupError("");
    setOtpSent(false);
  };

  const [showOtpPopup, setShowOtpPopup] = useState(false);

  const handleSendOtp = async () => {
  if (!emailRegex.test(signupEmail)) {
    setSignupError("Invalid email address");
    setOtpSent(false);
    setShowOtpPopup(false);
    return;
  }

  try {
    const res = await fetch("http://localhost:5000/api/send-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: signupEmail }),
    });
    const data = await res.json();

    if (data.success) {
      setOtpEmail(signupEmail); // Store the email used for OTP
      // setSignupError("");
      setPopup({ show: true, type:"success", message: "OTP sent successfully! Please check your email."});
      setOtpSent(true);
      setShowOtpPopup(true);
    } else {
      setPopup({ show: true, type:"error", message: data.error || "Failed to send OTP. Try again."});
    }
  } catch {
    setPopup({ show: true, type:"error", message: "Network error. Try again."});
  }
};

// otp verification handler
const handleVerifyOtp = async () => {
  setOtpVerifyError("");
  try {
    const res = await fetch("http://localhost:5000/api/verify-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: otpEmail, otp: enteredOtp }),
    });
    const data = await res.json();

    if (data.success) {
      setVerified(true);
      setOtpVerifyError("");
      setPopup({ show: true, type:"success", message: "OTP verified successfully! You can now sign up."})
      handleClosePopup();
      navigate("/signup");
    } else {
      setPopup({ show: true, type:"error", message: data.error || "Invalid or expired OTP."});
    }
  } catch {
    setPopup({ show: true, type:"error", message: "Network error. Try again."});
  }
};

  const handleClosePopup = () => {
    setShowSignupPopup(false);
    setSignupError("");
    setOtpSent(false);
    setSignupEmail("");
  };

  // Resend OTP handler
const handleResendOtp = async () => {
  setOtpVerifyError("");
  document.getElementById("otp").value = "";
  try {
    const res = await fetch("http://localhost:5000/api/resend-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: otpEmail }),
    });
    const data = await res.json();

    if (data.success) {
      setOtpSent(true);
      setOtpVerifyError("");
      setPopup({ show: true, type:"success", message: "OTP resent successfully! Please check your email."});
    } else {
      setPopup({ show: true, type:"error", message: data.error || "Failed to resend OTP. Try again."} );
    }
  } catch {
    setPopup({ show: true, type:"error", message: "Network error. Try again."} );
  }
};

  return (
    <div className="flex justify-center items-top mt-8 bg-gray-100">
      <div className="max-w-md bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-4 text-pink-600">Login</h2>
        {error && (
          <div className="mb-2">
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded relative" role="alert">
              <span className="block sm:inline">{error}</span>
            </div>
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="email"
            onChange={handleChange}
            type="email"
            required
            placeholder="Email"
            className="w-full border px-4 py-2 rounded focus:ring-pink-500"
          />
          <input
            name="password"
            onChange={handleChange}
            type="password"
            required
            placeholder="Password"
            className="w-full border px-4 py-2 rounded focus:ring-pink-500"
          />
          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700"
          >
            Sign in
          </button>
        </form>
        <div className="flex justify-between mt-3 text-sm text-gray-600">
          <button
            className="text-pink-600 hover:underline"
            disabled
          >
            Forgot Password?
          </button>
          <button
            className="text-pink-600 hover:underline"
            onClick={handleSignupClick}
          >
            Create an Account
          </button>
        </div>
      </div>

      {/* popup component */}
    <Popup
      show={popup.show}
      type={popup.type}
      message={popup.message}
      onClose={() => setPopup({ show: false, type: "error", message: "" })}
    />

      {/* Signup Popup */}
      {showSignupPopup && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
    <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-sm relative">
      <button
        className="absolute top-2 right-3 text-gray-400 hover:text-gray-700 text-xl"
        onClick={handleClosePopup}
        aria-label="Close"
      >
        &times;
      </button>
      <h3 className="text-xl font-bold mb-4 text-pink-600">
        {otpSent ? "Enter OTP" : "Sign Up"}
      </h3>
      {!otpSent ? (
        <>
          <input
            type="email"
            value={signupEmail}
            onChange={handleSignupEmailChange}
            placeholder="Enter your email address"
            className="w-full border px-4 py-2 rounded mb-2 focus:ring-pink-500"
          />
          {signupError && (
            <div className="text-red-500 text-sm mb-2">{signupError}</div>
          )}
          <button
            onClick={handleSendOtp}
            className="w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700 mb-3"
          >
            Send OTP
          </button>
          <div className="flex items-center my-3">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-2 text-gray-400 text-xs">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          <button
            className="w-full flex items-center justify-center border border-gray-300 py-2 rounded hover:bg-gray-100"
            // onClick={handleGoogleSignup}
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Sign up using Google Account
          </button>
        </>
      ) : (
        <>
          {otpVerifyError && (
            <div className="text-red-500 text-sm mb-2">{otpVerifyError}</div>
          )}
          <input
            type="text"
            value={enteredOtp}
            onChange={(e) => setEnteredOtp(e.target.value)}
            maxLength={6}
            name="otp"
            id="otp"
            placeholder="Enter OTP"
            className="w-full border px-4 py-2 rounded mb-2 focus:ring-pink-500"
          />
          <button
            className="w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700"
            onClick={handleVerifyOtp}
          >
            Verify OTP
          </button>
          <div className="flex justify-end mt-2">
            {/* popup errors or success */}
            <Popup
              show={popup.show}
              type={popup.type}
              message={popup.message}
              onClose={() => setPopup({ show: false, type: "error", message: "" })}
            />
            <button
              type="button"
              className="text-pink-600 text-sm hover:underline"
              onClick={handleResendOtp}
            >
              Resend OTP
            </button>
          </div>
        </>
      )}
    </div>
  </div>
)}
      {/* End Signup Popup */}
    </div>
  );
}

export default Login;
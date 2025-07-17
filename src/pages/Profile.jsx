import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";

function Profile() {
  const { user, setUser } = useAuth(); // We'll tweak context to allow updating user info
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    contactNumber: "",
    about: "",
  });
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (user) {
      // Initialize form with existing user data
      setProfile({
        name: user.name || "",
        email: user.email || "",
        contactNumber: user.contactNumber || "",
        about: user.about || "",
      });
    }
  }, [user]);

  // Update local profile state on input change
  const handleChange = (e) => {
    setProfile((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Save profile changes (here just updates context + localStorage)
  const handleSave = (e) => {
    e.preventDefault();
    // Update user in context and localStorage
    const updatedUser = { ...user, ...profile };
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setMessage("Profile updated successfully!");
  };

  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-gray-500">Please log in to view your profile.</p>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow mt-10">
      <h1 className="text-3xl font-bold mb-6 text-pink-600">Your Profile</h1>

      {message && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
          {message}
        </div>
      )}

      <form onSubmit={handleSave} className="space-y-4">
        <div>
          <label className="block mb-1 font-semibold" htmlFor="name">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={profile.name}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded focus:ring-pink-500"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold" htmlFor="email">
            Email (cannot change)
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={profile.email}
            readOnly
            className="w-full border bg-gray-100 px-4 py-2 rounded cursor-not-allowed"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold" htmlFor="contactNumber">
            Contact Number
          </label>
          <input
            id="contactNumber"
            name="contactNumber"
            type="tel"
            value={profile.contactNumber}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded focus:ring-pink-500"
            placeholder="Optional"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold" htmlFor="about">
            About You
          </label>
          <textarea
            id="about"
            name="about"
            value={profile.about}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded focus:ring-pink-500"
            rows={4}
            placeholder="Tell us a bit about yourself"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-pink-600 text-white py-3 rounded hover:bg-pink-700"
        >
          Save Profile
        </button>
      </form>
    </div>
  );
}

export default Profile;

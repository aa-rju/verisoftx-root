import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

// Hook to use context
export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  // Load logged-in user from localStorage
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // Load all users (for mock database)
  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem("users");
    return savedUsers ? JSON.parse(savedUsers) : [];
  });

  // Check if a user already exists
  const isUserRegistered = (email) => {
    return users.some((u) => u.email === email);
  };

  // Signup function
  const signup = ({ name, email, password }) => {
    if (isUserRegistered(email)) {
      return { error: "User already exists. Please log in." };
    }

    const newUser = {
      name,
      email,
      password,
      isAdmin: email === "admin@example.com",
      // Mark as admin if email matches
    };

    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    setUser({ name, email, isAdmin: newUser.isAdmin });

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.setItem(
      "user",
      JSON.stringify({ name, email, isAdmin: newUser.isAdmin })
    );

    return { success: true };
  };

  // Login function
const login = async ({ email, password }) => {
  try {
    const res = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (data.success) {
      setUser(data.user); // Store full user object
      localStorage.setItem("user", JSON.stringify(data.user));
      return { success: true };
    } else {
      return { error: data.error };
    }
  } catch (err) {
    return { error: "Network error" };
  }
};

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  // Password reset mock
  const resetPassword = (email) => {
    if (!isUserRegistered(email)) {
      return { error: "No account found with that email." };
    }
    // Simulate sending reset link
    return {
      success: "Password reset link has been sent to your email (mock).",
    };
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signup,
        login,
        logout,
        resetPassword,
        isUserRegistered,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

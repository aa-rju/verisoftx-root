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
  const login = ({ email, password }) => {
    const existingUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!existingUser) {
      return { error: "Invalid email or password." };
    }

    const loggedInUser = {
      name: existingUser.name,
      email: existingUser.email,
      isAdmin: existingUser.isAdmin || false,
    };

    setUser(loggedInUser);
    localStorage.setItem("user", JSON.stringify(loggedInUser));

    return { success: true };
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

import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
    const { login } = useAuth();
  const { userToken, loading } = useAuth();

  if (loading) return null;

  if (!userToken) {
    return <Navigate to="/SignIn" />;
  }

  return children;
}

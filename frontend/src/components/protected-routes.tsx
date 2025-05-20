import { Navigate } from "react-router-dom";
import React from "react";

type ProtectedRouteProps = {
  children: React.ReactElement;
  expectedRole: "MANAGER" | "EMPLOYEE";
};

export function ProtectedRoute({
  children,
  expectedRole,
}: ProtectedRouteProps) {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/auth/login" replace />;
  }

  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    const userRole = payload.role;

    if (userRole !== expectedRole) {
      return <Navigate to="/" replace />;
    }

    return children;
  } catch (error) {
    return <Navigate to="/auth/login" replace />;
  }
}

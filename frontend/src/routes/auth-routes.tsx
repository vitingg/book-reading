import { Route, Routes } from "react-router";
import { SingIn } from "../pages/login";
import { Signup } from "../pages/sing-up";
import { NotFound } from "../pages/error-page";
import { DashboardClient } from "../pages/dashboard-client";
import { DashboardManager } from "../pages/dashboard-manager";
import { MainPage } from "../pages/main-page";
import { ProtectedRoute } from "../components/protected-routes";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/auth/login" element={<SingIn />} />
      <Route path="/auth/signup" element={<Signup />} />

      <Route
        path="/dashboard/admin"
        element={
          <ProtectedRoute expectedRole="MANAGER">
            <DashboardManager />
          </ProtectedRoute>
        }
      />

      <Route
        path="/dashboard/client"
        element={
          <ProtectedRoute expectedRole="EMPLOYEE">
            <DashboardClient />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

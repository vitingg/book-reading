import { Route, Routes } from "react-router";
import { SingIn } from "../pages/login";
import { SingUp } from "../pages/sing-up";
import { NotFound } from "../pages/error-page";
import { DashboardClient } from "../pages/dashboard-client";
import { DashboardManager } from "../pages/dashboard-manager";
import { MainPage } from "../pages/main-page";


export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/auth/login" element={<SingIn />} />
      <Route path="/auth/singup" element={<SingUp />} />
      <Route path="/dashboard/client" element={<DashboardClient />} />
      <Route path="/dashboard/admin" element={<DashboardManager />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

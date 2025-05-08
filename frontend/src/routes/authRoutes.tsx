import { Route, Routes } from "react-router";
import { SingIn } from "../pages/SingIn";
import { SingUp } from "../pages/SignUp";
import { NotFound } from "../pages/404";
import { DashboardClient } from "../pages/DashboardClient";
import { DashboardManager } from "../pages/DashboardManager";


export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SingIn />} />
      <Route path="/signup" element={<SingUp />} />
      <Route path="/client" element={<DashboardClient />} />
      <Route path="/manager" element={<DashboardManager />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

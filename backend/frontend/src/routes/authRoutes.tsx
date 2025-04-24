import {Route, Routes} from "react-router"
import { SingIn } from "../pages/SingIn"
import { NotFound } from "../pages/404"
import { DashboardClient } from "../pages/DashboardClient"
import { DashboardManager } from "../pages/DashboardManager"

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SingIn />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/client" element={<DashboardClient />} />
      <Route path="/manager" element={<DashboardManager />} />
    </Routes>
  )
}
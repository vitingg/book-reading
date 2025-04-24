import { AuthRoutes } from "./authRoutes";
import { BrowserRouter } from "react-router";

export function Routes() {
  return (
    <BrowserRouter>
      <AuthRoutes />
    </BrowserRouter>
  )
}
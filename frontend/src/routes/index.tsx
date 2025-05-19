import { AuthRoutes } from "./auth-routes";
import { BrowserRouter } from "react-router";

export function Routes() {
  return (
    <BrowserRouter>
      <AuthRoutes />
    </BrowserRouter>
  )
}
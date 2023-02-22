import React, { Suspense, lazy } from "react";
import LazyLoader from "../Components/MasterLayout/LazyLoader";
const Login = lazy(() => import("../Components/Login/Login"));
function LoginPage() {
  return <Login />;
}

export default LoginPage;

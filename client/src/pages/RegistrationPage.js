import React, { Suspense, Fragment, lazy } from "react";
import MasterLayout from "../Components/MasterLayout/MasterLayout";
import LazyLoader from "../Components/MasterLayout/LazyLoader";
const Registration = lazy(() =>
  import("../Components/Registration/Registration")
);
function RegistrationPage() {
  return <Registration />;
}

export default RegistrationPage;

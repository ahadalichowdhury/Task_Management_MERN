import React, { Suspense, Fragment, lazy } from "react";
import MasterLayout from "../Components/MasterLayout/MasterLayout";
import LazyLoader from "../Components/MasterLayout/LazyLoader";
const NotFound = lazy(() => import("../Components/NotFound/NotFound"));
function NotFoundPage() {
  return (
    <Fragment>
      <Suspense fallback={<LazyLoader />}>
        <NotFound />
      </Suspense>
    </Fragment>
  );
}

export default NotFoundPage;

import React, { Suspense, Fragment, lazy } from "react";
import MasterLayout from "../Components/MasterLayout/MasterLayout";
import LazyLoader from "../Components/MasterLayout/LazyLoader";
const Completed = lazy(() => import("../Components/Completed/Completed"));
function CompletedPage() {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={<LazyLoader />}>
          <Completed />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
}

export default CompletedPage;

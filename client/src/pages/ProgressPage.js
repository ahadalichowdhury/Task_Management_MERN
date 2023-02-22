import React, { Suspense, Fragment, lazy } from "react";
import MasterLayout from "../Components/MasterLayout/MasterLayout";
import LazyLoader from "../Components/MasterLayout/LazyLoader";
const Progress = lazy(() => import("../Components/Progress/Progress"));
function ProgressPage() {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={<LazyLoader />}>
          <Progress />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
}

export default ProgressPage;

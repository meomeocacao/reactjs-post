import React, { lazy, Suspense } from "react";

const LazyPost = lazy(() => import("./Post"));

const Post = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => (
  <Suspense fallback={null}>
    <LazyPost {...props} />
  </Suspense>
);

export default Post;

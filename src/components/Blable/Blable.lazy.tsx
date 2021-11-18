import React, { lazy, Suspense } from 'react';

const LazyBlable = lazy(() => import('./Blable'));

const Blable = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyBlable {...props} />
  </Suspense>
);

export default Blable;

import React, { Suspense } from 'react';
import { LoadingSpinner } from '../ui';

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <LoadingSpinner size="lg" text="Loading page..." />
  </div>
);

const SuspenseWrapper = ({ children, fallback = <PageLoader /> }) => (
  <Suspense fallback={fallback}>
    {children}
  </Suspense>
);

export default SuspenseWrapper;

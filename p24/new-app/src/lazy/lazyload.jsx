import React, { lazy, Suspense } from 'react';

// Create a lazy-loaded component
// const LazyLoadedComponent = lazy(() => import('./LazyLoadedComponent'));

// A fallback component to show while the lazy-loaded component is loading
const LoadingFallback = () => <div>Loading...</div>;

// Your main component
const Lazyload = () => {
  return (
    <div>
      <h1>Main Component</h1>

      {/* Use Suspense to wrap the lazy-loaded component */}
      <Suspense fallback={<LoadingFallback />}>
        {/* Render the lazy-loaded component */}
        {/* <LazyLoadedComponent /> */}
      </Suspense>
    </div>
  );
};

export default Lazyload;

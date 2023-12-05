import React, { useEffect } from 'react';

// Higher-Order Component (HOC)
const withLogging = (WrappedComponent) => {
  // WithLogging functional component
  const WithLogging = (props) => {
    // useEffect(() => {
    //   console.log(`Component "${WrappedComponent.name}" is rendered.`);
    // }, []);

    // Pass the props down to the wrapped component
    return <WrappedComponent {...props} />;
  };

  return WithLogging;
};

// Wrapped Component
const MyComponent = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

// Apply the HOC to the Wrapped Component
const MyComponentWithLogging = withLogging(MyComponent);

// Usage in the App


export default MyComponentWithLogging;

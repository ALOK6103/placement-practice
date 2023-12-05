import React from 'react';

// Higher-Order Component for Adding a Title
const withTitle = (WrappedComponent, title) => {
  // This HOC returns a new functional component with an added title prop
  return function ComponentWithTitle(props) {
    return (
      <div>
        <h1>{title}</h1>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

// Functional Component without a title
const PlainComponent = () => {
  return <p>This is a plain functional component.</p>;
};

// Functional Component enhanced with a title using the withTitle HOC
const ComponentWithTitle = withTitle(PlainComponent, 'Enhanced Functional Component');

// Usage of the enhanced component
const App3 = () => {
  return (
    <div>
      <ComponentWithTitle />
    </div>
  );
};

export default App3;

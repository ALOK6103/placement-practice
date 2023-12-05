import React from 'react';

// Higher Order Component (HOC) function
const withUpperCase = (WrappedComponent) => {
  // Return a functional component
  return (props) => {
    // Transform the prop 'text' to uppercase before rendering
    const uppercasedText = props.text.toUpperCase();

    // Render the wrapped component with the modified prop
    return <WrappedComponent {...props} text={uppercasedText} />;
  };
};

// Original functional component
const DisplayText = ({ text }) => {
  return <p>{text}</p>;
};

// Apply the HOC to the original component
const DisplayUppercasedText = withUpperCase(DisplayText);

// Usage in the parent component
const ParentComponent = () => {
  return (
    <div>
      <DisplayText text="Original Text" />
      <DisplayUppercasedText text="Uppercased Text" />
    </div>
  );
};

export default ParentComponent;

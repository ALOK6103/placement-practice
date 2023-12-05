import React, { useState, useCallback } from 'react';

// useCallback:

// useCallback is used to memoize functions so that they don't get recreated on each render unless their dependencies change. This can be useful when passing functions as props to child components, as it helps prevent unnecessary re-renders of those components.

// Here's an example:

function ParentComponent() {
  const [count, setCount] = useState(0);

  // Without useCallback, this function would be recreated on every render.
  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <ChildComponent increment={increment} />
    </div>
  );
}

function ChildComponent({ increment }) {
  return (
    <button onClick={increment}>Increment</button>
  );
}

export default ParentComponent;



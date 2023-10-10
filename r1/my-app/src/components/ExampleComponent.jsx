import React, { useEffect, useState } from 'react';

const ExampleComponent = () => {
  const [count, setCount] = useState(0);

  // componentDidMount and componentDidUpdate
  useEffect(() => {
    // This code runs after every render
    console.log('Component updated or mounted');
  });

  // componentDidMount (runs once)
  useEffect(() => {
    console.log('Component mounted');
    // Clean-up function for componentWillUnmount
    return () => {
      console.log('Component will unmount');
    };
  }, []);

  // componentDidUpdate (runs whenever count changes)
  useEffect(() => {
    console.log('Component updated due to count change');
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default ExampleComponent;

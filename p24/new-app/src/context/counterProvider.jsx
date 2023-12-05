import React, { createContext, useContext, useState } from 'react';

// Step 1: Create a context
const CounterContext = createContext();

// Step 2: Create a provider component
const CounterProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const decrement = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  // Step 3: Provide the state and functions to the context
  const contextValue = {
    counter,
    increment,
    decrement,
  };

  return <CounterContext.Provider value={contextValue}>{children}</CounterContext.Provider>;
};

// Step 4: Create a custom hook for consuming the context
const useCounter = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error('useCounter must be used within a CounterProvider');
  }
  return context;
};

// Step 5: Use the CounterProvider in your app
const App1 = () => {
  return (
    <CounterProvider>
      <div>
        <ComponentA />
        <ComponentB />
      </div>
    </CounterProvider>
  );
};

// Step 6: Use the custom hook to consume the context in components
const ComponentA = () => {
  const { counter, increment } = useCounter();

  return (
    <div>
      <h2>Component A</h2>
      <p>Counter: {counter}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

const ComponentB = () => {
  const { counter, decrement } = useCounter();

  return (
    <div>
      <h2>Component B</h2>
      <p>Counter: {counter}</p>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default App1;

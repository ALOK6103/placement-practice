import React, { useState, useMemo, useEffect } from 'react';

// useMemo is used to memoize computed values. It takes a function and an array of dependencies and returns a memoized value. This can be helpful when you have expensive calculations that you want to avoid re-computing on every render

function ExpensiveComponent() {
  const [count, setCount] = useState(10);

  // Without useMemo, this expensive calculation would run on every render.
  const squared = useMemo(() => {
    console.log('Calculating squared value...');
    return count * count;
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Squared: {squared}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}


export default ExpensiveComponent;

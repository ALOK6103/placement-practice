import React, { useState, useEffect } from 'react';

function LifecycleExample() {
  // State using the useState hook
  const [message, setMessage] = useState('Hello, World!');

  // ComponentDidMount equivalent using the useEffect hook
  useEffect(() => {
    console.log('ComponentDidMount: Component is now mounted to the DOM.');
    // You can perform tasks like data fetching here.

    // ComponentWillUnmount equivalent - Cleanup function
    return () => {
      console.log('ComponentWillUnmount: Component is about to be unmounted and destroyed.');
      // Cleanup tasks or event listeners can be removed here.
    };
  }, []);

  // ComponentDidUpdate equivalent using the useEffect hook
  useEffect(() => {
    console.log('ComponentDidUpdate: Component updated.');
    // You can check for changes in state or props here and update as needed.
  }, [message]);

  return (
    <div>
      <p>{message}</p>
      <button onClick={() => setMessage('Updated Message')}>
        Update Message
      </button>
    </div>
  );
}

export default LifecycleExample;

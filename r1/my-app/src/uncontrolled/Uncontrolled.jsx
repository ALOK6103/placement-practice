import React, { useRef } from 'react'

const Uncontrolled = () => {
    const inputRef = useRef(null);

    const handleButtonClick = () => {
      console.log('Input Value:', +inputRef.current.value);
    };
    
    return (
      <>
        <input type="text" ref={inputRef} />
        <button onClick={handleButtonClick}>Get Value</button>
      </>
    );
    
}

export default Uncontrolled


import React, { useState } from 'react'

const Controlled = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
      setInputValue(event.target.value);
      console.log(inputValue);
    };
    
    return (
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
    );
    
}

export default Controlled
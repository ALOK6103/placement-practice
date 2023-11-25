import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000'); // Replace with your server URL

const CollaborativeEditor = () => {
  const [text, setText] = useState('');

  useEffect(() => {
    // Listen for text changes from other users
    socket.on('text-change', (changedText) => {
      setText(changedText);
    });

    return () => {
      // Clean up the socket connection when the component unmounts
      socket.disconnect();
    };
  }, []);

  const handleTextChange = (e) => {
    const newText = e.target.value;

    // Send the text change to the server
    socket.emit('text-change', newText);

    // Update the local state immediately
    setText(newText);
  };

  return (
    <textarea
      value={text}
      onChange={handleTextChange}
      placeholder="Collaborate in real-time..."
      style={{ width: '100%', height: '200px' }}
    />
  );
};

export default CollaborativeEditor;

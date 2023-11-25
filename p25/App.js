import React from 'react';
import ReactDOM from 'react-dom';
import CollaborativeEditor from './CollaborativeEditor';

const App = () => {
  return (
    <div>
      <h1>Real-time Collaborative Editor</h1>
      <CollaborativeEditor />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

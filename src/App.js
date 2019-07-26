import React, { useState } from 'react';
import './App.css';
import RequestPanel from './RequestPanel';

function App() {
  const [view, setView] = useState(true);

  return (
    <div className="App">
      Component visibility: {view.toString()} <input type="button" value="Change Visibility" onClick={() => setView(!view)} /> 
      {view && <RequestPanel />}
    </div>
  );
}

export default App;

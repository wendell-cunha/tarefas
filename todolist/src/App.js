import React from 'react';
import './App.css';

import Navbar from './Components/Navbar/Navbar';

function App(){
  return (
    <div className="App">
      <Navbar />
      <ul className="lista">
        <li>Aprendemos react</li>
        <li>Aprendemos components</li>
      </ul>
    </div>
  );
}

export default App;
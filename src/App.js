import React from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Counter />
      {/* <Message /> */}
      {/* <Welcome name="Bruce" heroName="Batman"/>
      <Welcome name="Clark" heroName="Superman"/>
      <Welcome name="Gwen" heroName="Spiderman"/> */}
    </div>
  );
}

export default App;
import React from 'react';
import './App.css';
// import Welcome from './components/Welcome';
// import Message from './components/Message';
// import Counter from './components/Counter';
// import Greet from './components/Greet';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';

function App() {
  return (
    <div className="App">
      <FunctionClick />

      <ClassClick />

      {/* <Counter /> */}

      {/* <Message /> */}

      {/* <Welcome name="Bruce" heroName="Batman"/>
      <Welcome name="Clark" heroName="Superman"/>
      <Welcome name="Gwen" heroName="Spiderman"/> */}

      {/* <Greet name="Bruce" heroName="Batman"/>
      <Greet name="Clark" heroName="Superman"/> */}

    </div>
  );
}

export default App;
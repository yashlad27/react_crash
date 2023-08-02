import React from 'react';
import './App.css';
// import Welcome from './components/Welcome';
// import Message from './components/Message';
// import Counter from './components/Counter';
// import Greet from './components/Greet';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
// import EventBind from './components/EventBind';
// import ParentComponent from './components/ParentComponent';
// import UserGreeting from './components/UserGreeting';
// import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';

function App() {
  return (
    <div className="App">
      <Inline />

      <Stylesheet primary={true}/>

      {/* <NameList /> */}

      {/* <UserGreeting /> */}

      {/* <ParentComponent /> */}

      {/* <EventBind /> */}

      {/* <FunctionClick />

      <ClassClick /> */}

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
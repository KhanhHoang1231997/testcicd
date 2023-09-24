import logo from './logo.svg';
import './App.css';
import Clock from './Clock';
import SnapShot from './SnapShot';
import Test from './Test';
import NotUseContextExample from './ExampleUseContext/NotUseContextExample';
import UseContextExample from './ExampleUseContext/UseContextExample';
import { useState } from "react";
import UseRefExample from './ExampleUseRef/UseRefExample';
import UseReducerExample from './ExampleUseReducer/UseReducerExample';
import ExampleUseMemo from './ExampleUseMemo/ExampleUseMemo';

const App = () => {
  const [text, setText] = useState("a");
  const [isShow, setShow] = useState(true);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* UseContext hook */}
          {/* <NotUseContextExample /> */}
          {/* <UseContextExample /> */}
        {/* UseContext hook */}
        {/* Effect hook */}
          {/* <Test text={text} />
          <button onClick={() => setText("Test")}>Click</button>
          <button onClick={() => setText("Edit")}>Click Edit</button>
          <button onClick={() => setShow(!isShow)}>{isShow ? "Hide" : "Show"}</button> */}
        {/* Effect hook */}
        {/* UseRef hook */}
          {/* <UseRefExample /> */}
        {/* UseRef hook */}
        {/* <UseReducerExample /> */}
        <ExampleUseMemo />
      </header>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Clock from'./Clock';
import SnapShot from'./SnapShot';
import Test from'./Test';
import { useState } from "react";
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
        {isShow && <Clock a={text}/>}
        {/* <SnapShot />
        <Test a={text} /> */}
        <button onClick={() => setText("Test")}>Click</button>
        <button onClick={() => setText("Edit")}>Click Edit</button>
        <button onClick={() => setShow(!isShow)}>{isShow ? "Hide" : "Show"}</button>
      </header>
    </div>
  );
}

export default App;

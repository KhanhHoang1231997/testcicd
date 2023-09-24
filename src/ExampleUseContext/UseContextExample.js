import { useState } from "react";
import { createContext, useContext } from "react";
const LightContext = createContext();
const UseContextExample = () => {
  const [on, setOn] = useState(false);
  const toggle = () => setOn(o => !o);

  return(
    <LightContext.Provider value={{ on, toggle }}>
      <Switch />
    </LightContext.Provider>
  );
}

export default UseContextExample;

const Switch = () => {
  return (
    <div>
      <SwitchMessage />
      <SwitchButton />
    </div>
  )
}

const SwitchMessage = () => {
  const { on } = useContext(LightContext);
  return <div>The button is {on ? 'on' : 'off'}</div>
}

const SwitchButton = () => {
  const { toggle } = useContext(LightContext);
  return <button onClick={toggle}>Toggle</button>
}
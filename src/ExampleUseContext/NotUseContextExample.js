import { useState } from "react";
const NotUseContextExample = () => {
  const [on, setOn] = useState(false);
  return <Switch on={on} onToggle={() => setOn(!on)} />
}

export default NotUseContextExample;

const Switch = ({on, onToggle}) => {
  return (
    <div>
      <SwitchMessage on={on} />
      <SwitchButton onToggle={onToggle} />
    </div>
  )
}

const SwitchMessage = ({on}) => {
  return <div>The button is {on ? 'on' : 'off'}</div>
}

const SwitchButton = ({onToggle}) => {
  return <button onClick={onToggle}>Toggle</button>
}
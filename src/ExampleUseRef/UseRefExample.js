import React, { useRef } from "react";
import UseRefExamplePart2 from './UseRefExamplePart2';
const UseRefExample = () => {
  const inputRef = useRef(null);
  const ref = useRef(null);
  const focusNe = () => {
    inputRef.current.focus();
  }
  const goOnTop = () => {
    console.log("ref: ", ref);
    ref?.current?.scrollIntoView(0);
  }
  return (
    <>
      <button onClick={focusNe}>Focus</button>
      <input ref={inputRef} />
      <UseRefExamplePart2  ref={ref}/>
      <span>Hello con default</span>
      <span>Hello con default</span>
      <span>Hello con default</span>
      <span>Hello con default</span>
      <span>Hello con default</span>

      <span>Hello con default</span>
      <span>Hello con default</span>
      <span>Hello con default</span>
      <span>Hello con default</span>
      <span>Hello con default</span>
      <span>Hello con default</span>
      <span>Hello con default</span>
      <span>Hello con default</span>
      <span>Hello con default</span>
      <span>Hello con default</span>
      <span>Hello con default</span>
      <span>Hello con default</span>
      <span>Hello con default</span>
      <span>Hello con default</span>
      <span>Hello con default</span>
      <span>Hello con default</span>
      <span>Hello con default</span>
      <span>Hello con default</span>
      <span>Hello con default</span>
      <span>Hello con default</span>
      <span>Hello con default</span>
      <span>Hello con default</span>
      <button onClick={goOnTop}>Go to top</button>
    </>
  );
};
  export default UseRefExample;
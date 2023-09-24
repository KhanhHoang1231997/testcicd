import React , { useState, useEffect }from "react";
const Test = (props) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("useEffect text: ");
  }, [props.text]);

  useEffect(() => {
    console.log("count");
    return () => {
      console.log("disconnect");
    };
  }, [count]);

  useEffect(() => {
    console.log("useEffect mounted or updated");
  });

  useEffect(() => {
    console.log("useEffect did mounted");
    return () => {
      console.log("counter unmounted");
    };
  }, []);

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </>
  );
};
  export default Test;
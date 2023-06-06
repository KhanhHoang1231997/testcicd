import React , { useState, useEffect }from "react";
const Test = (props) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("useEffect count");
  }, [props.a]);

  useEffect(() => {
    console.log("count1");
  }, [count1]);

  useEffect(() => {
    console.log("counter mounted or updated");
  });

  useEffect(() => {
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
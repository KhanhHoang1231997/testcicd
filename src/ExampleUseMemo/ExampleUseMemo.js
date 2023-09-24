import React , { useState, useMemo, useCallback }from "react";
const calculateCount = (num) => {
  console.log("calculateCount");
  return num + 10;
};
const ExampleUseMemo = (props) => {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(0);
  // const numPlusTen = calculateCount(count);
  // const numPlusTen = useCallback(() => calculateCount(count), [count]);
  const numPlusTen = useMemo(() => calculateCount(count), [count]);

  return (
    <>
      <p>{count}</p>
      <p>{numPlusTen}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <p>Đây là Amount</p>
      <p>{amount}</p>
      <button onClick={() => setAmount(amount + 1)}>+</button>
      <button onClick={() => setAmount(amount - 1)}>-</button>
    </>
  );
};
  export default ExampleUseMemo;
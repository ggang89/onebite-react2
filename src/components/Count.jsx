import { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  console.log(count);
  return (
    <>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </>
  );
};
export default Count;
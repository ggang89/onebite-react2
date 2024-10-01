import "./counter.css"
import Controller from "./Controller";
import Viewer from "./Viewer";
import { useState, useEffect } from "react";

export default function CounterApp() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    console.log(`count: ${count}`)
   }, [count])
  //[count]가 바뀔때마다 첫번째 인수로 전달한 함수를 실행함

  const onClickBtn = (value) => {
    setCount(count + value);
  }
  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller ClickBtn={onClickBtn} />
      </section>
    </div>
  );
}
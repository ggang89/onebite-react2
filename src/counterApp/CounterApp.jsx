import "./counter.css"
import Controller from "./Controller";
import Viewer from "./Viewer";
import { useState } from "react";

export default function CounterApp() {
  const [count, setCount] = useState(0);
  
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
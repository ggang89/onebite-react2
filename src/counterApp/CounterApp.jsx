import "./counter.css"
import Controller from "./Controller";
import Viewer from "./Viewer";
import Even from "./Even";
import { useState, useEffect, useRef } from "react";

export default function CounterApp() {
  const [count, setCount] = useState(0);
  
  const isMount = useRef(false);

  // 1. 마운트 : 탄생
  useEffect(() => {
    console.log(`mount`)
   }, [])
  //[count]가 바뀔때마다 첫번째 인수로 전달한 함수를 실행함


  // 2. 업데이트 : 변화, 리렌더링
  // [] 안쓰면 업데이트 될때마다 useEffect 함수 실행됨
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
      //isMount 가 true가 되어야 콘솔 실행됨
      //Mount시점 제외하고, update가 될 때마다 실행되는지 확인하기
    }
    console.log("update")
  })

  // 3. 언마운트 : 죽음
  const onClickBtn = (value) => {
    setCount(count + value);
  }
  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
        {count % 2 === 0? <Even/> : null}
      </section>
      <section>
        <Controller ClickBtn={onClickBtn} />
      </section>
    </div>
  );
}
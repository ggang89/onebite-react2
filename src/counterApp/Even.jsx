import { useEffect } from "react";

export default function Even() {
  useEffect(() => {
    //클린업, 정리함수 = >useEffect의 콜백함수가 반환하는 함수
    //useEffect가 끝날 때 실행됨
    return () => { 
      console.log("unMount")
    };
  }, [])
  //빈배열 => Mount일 때 실행되고, unMount일 때 종료됨
  return <div>짝수입니다.</div>;
}
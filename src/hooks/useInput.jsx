//나만의 커스텀 훅 만들기

import { useState } from "react";

function useInput() {
  //커스텀 훅에 use를 붙이면, 컴포넌트 위에 써도 오류없음
  const [input, setInput] = useState("");

  const onChange = (e) => {
    setInput(e.target.value);
  };
  return [input, onChange];
}

export default useInput;

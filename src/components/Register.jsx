import { useState } from "react";

//간단한 회원가입 폼 만들기
//1. 이름 2. 생년월일  3.국적  4.자기소개

export default function Register() {
  //=> 하나의 객체에 넣기
  const [input, setInput] = useState({
    name: "",
    birth: "",
    live: "",
    intro: "",
  });
  const onChange = (e) => {
    setInput({
      ...input,
      [e.target.name]:e.target.value,
    })
   };
  
  
  
  return (
    <>
      <div>
        <input name="name" value={input.name} onChange={onChange} />
      </div>
      <div>
        <input name="birth" type="date" value={input.birth} onChange={onChange} />
      </div>
      <div>
        <select name="live" value={input.live} onChange={onChange}>
          <option value="kr">한국</option>
          <option value="earth">지구</option>
          <option value="galaxy">우리은하</option>
        </select>
      </div>
      <div>
        <textarea name="intro" value={input.intro} onChange={onChange} />
      </div>
    </>
  );
}

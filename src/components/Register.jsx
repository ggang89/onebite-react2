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

  const onChangeName = (e) => {
    setInput({
      ...input,
      name: e.target.value,
    });
  };
  const onchangeBirth = (e) => {
    setInput({
      ...input,
      birth: e.target.value,
    });
  };
  const onChangeLive = (e) => {
    setInput({
      ...input,
      live: e.target.value,
    });
  };
  const onChangeIntro = (e) => {
    setInput({
      ...input,
      intro: e.target.value,
    });
  };
  return (
    <>
      <div>
        <input value={input.name} onChange={onChangeName} />
      </div>
      <div>
        <input type="date" value={input.birth} onChange={onchangeBirth} />
      </div>
      <div>
        <select value={input.live} onChange={onChangeLive}>
          <option value="kr">한국</option>
          <option value="earth">지구</option>
          <option value="galaxy">우리은하</option>
        </select>
      </div>
      <div>
        <textarea value={input.intro} onChange={onChangeIntro} />
      </div>
    </>
  );
}

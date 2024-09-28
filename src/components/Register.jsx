import { useState } from "react";

//간단한 회원가입 폼 만들기
//1. 이름 2. 생년월일  3.국적  4.자기소개

export default function Register() {
  const [name, setName] = useState("이름");
  const [birth, setBirth] = useState("");
  const [live, setLive] = useState("");
  const [intro, setIntro] =useState("😀")

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onchangeBirth = (e) => {
    setBirth(e.target.value);
  };
  const onChangeLive = (e) => {
    setLive(e.target.value);
  };
  const onChangeIntro = (e) => {
    setIntro(e.target.value);
  }
  return (
    <>
      <div>
        <input value={name} onChange={onChangeName} />
      </div>
      <div>
        <input type="date" value={birth} onChange={onchangeBirth} />
      </div>
      <div>
        <select value={live} onChange={onChangeLive}>
          <option value="kr">한국</option>
          <option value="earth">지구</option>
          <option value="galaxy">우리은하</option>
        </select>
        {live}
      </div>
      <div>
        <textarea value={intro} onChange={onChangeIntro}/>
        {intro}
      </div>
    </>
  );
}

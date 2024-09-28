//나만의 커스텀 훅 만들기

import  useInput  from "./../hooks/useInput";


const HookExam = () => {
  const [input, onChange] = useInput();
  return (
    <div>
      <input value={input} onChange={onChange}/>
    </div>
  )
}

export default HookExam;
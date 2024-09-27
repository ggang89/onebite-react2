export default function Button(props) { 
  console.log(props); //{text:"카페"} 객체형태를 가짐
  return (
    <button style={{ color: props.color }}> 
      {props.text} {props.color?.toUpperCase()}
      {props.children}
    </button>
  );
}
//const props ={text:"카페"}
//const {text}=props
//console.log(text) //카페

//props.color가 없는 경우 toUpperCase메서드로 인해서 오류 발생함
//undefined에 메서드를 호출하는 것이므로
//오류 방지를 위한 방법
// 1. "기본값"을 설정
// Button.defaultProps = {
//   color: "black"
// };
// 2. 옵셔널 체이닝 사용
// props.color?.toUpperCase()
//color가 없는 경우 undefined가 반환되므로 오류가 안 남!
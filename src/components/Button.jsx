export default function Button(props) {
  console.log(props); //{text:"카페"} 객체형태를 가짐
  return (
    <button style={{ color: props.color }}>
      {props.text} {props.color}
    </button>
  );
}
//const props ={text:"카페"}
//const {text}=props
//console.log(text) //카페

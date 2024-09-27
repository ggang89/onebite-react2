import "./App.css";
import Button from "./components/Button";


const buttonProps = { text: "메일", color: "red" }

function App() {
  return (
    <>
      <Button text={"메일"} color={"red"} />
      <Button {...buttonProps} />
      <Button text={"카페"} />
      <Button text={"블로그"} />
    </>
  );
}

export default App;

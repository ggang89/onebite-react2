import "./App.css";
import Button from "./components/Button";
import Header from "./components/Header";

function App() {
  const buttonProps = { text: "메일", color: "red" };
  return (
    <>
      <Button text={"메일"} color={"red"} />
      <Button {...buttonProps} />
      <Button text={"카페"}>
        <Header />
      </Button>
      <Button text={"블로그"}>
        <div>자식요소 전달하기</div>
      </Button>
    </>
  );
}

export default App;

export default function Controller({ ClickBtn }) {
  return (
    <>
      <button
        onClick={() => {
          ClickBtn(-1);
        }}
      >
        -1
      </button>
      <button
        onClick={() => {
          ClickBtn(-10);
        }}
      >
        -10
      </button>
      <button
        onClick={() => {
          ClickBtn(-100);
        }}
      >
        -100
      </button>
      <button
        onClick={() => {
          ClickBtn(+100);
        }}
      >
        +100
      </button>
      <button
        onClick={() => {
          ClickBtn(+10);
        }}
      >
        +10
      </button>
      <button
        onClick={() => {
          ClickBtn(+1);
        }}
      >
        +1
      </button>
    </>
  );
}

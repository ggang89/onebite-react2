import "../App.css"
//jsx 주의사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.
// 2. 숫자, 문자열, 배열 값만 렌더링 된다.
// 3. 모든 태그는 닫혀있어야 한다.
// 4. 최상위 태그는 반드시 하나여야 한다.
export default function Main() {
  const user = {
    name: "park",
    isLogin: false,
  };

  if (user.isLogin) {
    return <div style={{ //객체를 전달하기 때문에 중괄호를 한번 더 쓴다. 
      backgroundColor:"lightblue"
    }}>로그인 상태</div>;
  } else {
    return <div className="logout">로그아웃 상태</div>
  }
  //return을 이렇게도 쓸 수 있다...!

  //return <>{user.isLogin ? <h1>로그인 상태</h1> : <h1>로그아웃 상태</h1>}</>;
      
}
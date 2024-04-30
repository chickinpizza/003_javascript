// 기명함수 ,,,근데 이거 쓰지 말래. 그냥 익명함수나 화살표함수 쓰래... 어지간하면..?
function name() {
  console.log("함수실행");
}
//name();
// 익명함수
const getName = function (name) {
  console.log(`제 이름은 ${name}입니다.`);
};
//getName("김김김");
//getName("나나나");
//getName("다다다");

// 반환

// 매개변수
function sum(num1, num2) {
  console.log(num1 + num2);
  return num1 + num2;
}
//const a = sum(2, "3");
//const b = sum(10, 20);
//console.log(a);
//console.log(b);

// 함수 호이스팅
const sayHi = function () {
  console.log("hi");
};

sayHi();

// 화살표 함수
const sumResult = (a, b) => {
  return a + b;
};

console.log(sumResult(5, 6));

// 호출 스케줄링

const startButton = document.querySelector(".start");
startButton.addEventListener("click", () => {
  //setInterval(() => {
  // console.log("2초에 한 번씩 실행");
  //}, 2000);
  //setTimeout(() => {
  //console.log("확인해주세요");
  //}, 2000);
});

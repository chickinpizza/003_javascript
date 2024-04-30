// 이벤트 생성
const button = document.querySelector("button");
//button.addEventListener("이벤트", 함수);
button.addEventListener("click", function () {
  console.log("클릭했지?");
});
// 이벤트 종류
const box = document.querySelector(".box");
const log = document.querySelector(".log");
box.addEventListener("click", () => {
  log.insertAdjacentHTML("beforeend", "<span>click이 되었습니다.<br/></span>");
  //console.log("클릭되었습니다.");
});
box.addEventListener("mouseenter", () => {
  log.insertAdjacentHTML(
    "beforeend",
    "<span>마우스가 진입되었습니다.<br/></span>"
  );
});
box.addEventListener("mouseleave", () => {
  log.insertAdjacentHTML(
    "beforeend",
    "<span>마우스가 벗어났습니다.<br/></span>"
  );
});
box.addEventListener("input", () => {
  log.insertAdjacentHTML("beforeend", "<span>입력되고 있습니다.<br/></span>");
  console.log(event.target.value);
});
box.addEventListener("change", () => {
  log.insertAdjacentHTML(
    "beforeend",
    "<span>입력값이 변경되었습니다.<br/></span>"
  );
  console.log(event.target.value);
});

// 기본동작 취소
const link = document.querySelector(".link");
link.addEventListener("click", (event) => {
  event.preventDefault();
  const text = event.target.textContent;
  console.log(text);
});

const form = document.querySelector(".form");
form.addEventListener("submit", (evnet) => {
  event.preventDefault();
});

// event target

// 생각을 정리= 알고리즘
// 1. 선택자 정의
const input = document.querySelector(".input");
const content = document.querySelector(".preview__content");
// 2. 작성 event 정의 해야된다는 것 감지
input.addEventListener("input", (event) => {
  // 3. 작성된 텍스트 저장
  const text = event.target.value;
  //console.log(text); < 실시간 텍스트 되는 지 확인용
  // 4. 저장된 텍스트 원하는 공간에 넣기
  content.innerText = text;
});

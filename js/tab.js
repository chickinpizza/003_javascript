//1. 선택자 정의
const tabButton = document.querySelectorAll(".tab li");
const tabContent = document.querySelectorAll(".tab-content > div");
const active = "--active";

//2. 탭 이벤트 정의
tabButton.forEach((element, index) => {
  console.log(index);
  element.addEventListener("click", (event) => {
    const isButton = event.target.parentElement;
    const index = event.ta4rget.;
    //4. 탭버튼 나머지 비활성화
    tabButton.forEach((el) => {
      el.classList.remove(active);
    });
    //3. 탭 버튼 활성화

    isButton.classList.add(active);
  });
});
//5. 탭버튼이 몇번째 인지 기억
//6. 탭버튼의 n번째에 맞는 탭내용 탐색 후 활성
//7. 탭내용의 n번째가 아닌 것은 비활성

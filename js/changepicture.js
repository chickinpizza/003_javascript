//설계
// 1. 선택자 정의
const button = document.querySelectorAll(".pictures button");
const big = document.querySelector(".pictures .bigsize img");

// 2. 버튼에 이벤트 생성
button.forEach((element) => {
  element.addEventListener("click", (event) => {
    // 3. 클릭한 버튼의 img 태그의 src 값 기억
    const isSrc = event.target.getAttribute("src");
    const isAlt = event.target.getAttribute("Alt");
    //console.log(isSrc);
    button.forEach((item) => {
      item.classList.remove("--acitve");
    });
    event.target.parentElement.classList.add("--acitve");

    // 4. 큰 이미지에 기억한 src 값 삽입
    big.setAttribute("src", isSrc);
    big.setAttribute("alt", isAlt);
  });
});

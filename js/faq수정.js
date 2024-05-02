// 게시물 갯수를 처리하는 함수
const postNumber = (tableName, countElement, isDivide = false) => {
  const tr = document.querySelectorAll(`${tableName} tbody tr`);
  const count = document.querySelector(countElement);
  let trLength;

  if (isDivide) {
    trLength = tr.length / 2; // tr갯수 / 2
  } else {
    trLength = tr.length; // tr갯수
  }
  count.innerText = trLength; // 총게시물수 반영
};
console.log(trLength);
//count.innerText = trLength; //총 게시물 수 반영

// FAQ게시판 기능 함수
const Faq = (activeClass) => {
  const title = document.querySelectorAll(".faq-board a"); // 링크
  const tr = document.querySelector(".faq-board tbody tr");

  postNumber(".faq-board", ".count", true);

  title.forEach((element) => {
    element.addEventListener("click", (event) => {
      event.preventDefault();
      const isAnswer =
        event.target.parentElement.parentElement.nextElementSibling;
      console.log(isAnswer);
      tr.forEach((item) => {
        item.classList.remove("activeClass");
      });
      isAnswer.classList.add("activeClass");
    });
  });
};

// 자유게시판 기능
const FreeBoard = () => {
  // postNumber(tr선택자, 카운트된텍스트 삽입할 선택자);
  postNumber(".free-board", ".count2");
};

Faq();
FreeBoard();

//변수데이터
let a = "사과";
let b = "100";

// string
let name = "김김김";
//let address = '서울 어딘가';<홀따옴표도 된다는 뜻
let email = `yoju00ii@gmail.com`; //템플릿 리터럴 혹은 빽틱 얘도 읽힘
let realname = name;

//let nameDate = "이름 " + name + "이메일" + email; < 약간 구시대
let nameDate = `이름 ${name} 입니다. 제 이메일은 ${email} 입니다.`;
//console.log(nameDate);

// number
let age = 30;
let birth = 1981;
let sum = age + birth;
//console.log(typeof String(age));

// boolean 옳고 그름을 나타낸다는데
let isShow = true;
let isHide = false;
//console.log(typeof isShow);
//if (age === 30) {
//  console.log("30세입니다.");
//} else {
// console.log("30세가 아닙니다.");
//}/

// undefined
let undef;
//console.log(undef);
let obj = {};
//console.log(obj);

//unll

// object 객체
let user = {
  name: "김김김",
  birth: 1000,
  address: "서울",
};
//console.log(user.address);
//const div = document.querySelector("div");
//div.innerHTML = `생일이 ${user.birth}이신 ${user.name}님 안녕하세요.`;

// array 배열
let hobby = ["photo", "piano", "swim", 777, true];
//console.log(hobby[4]);
//console.log(hobby.length);

// function 함수
function 함수명() {
  //함수식
  console.log("함수가 실행되었습니다.");
}
result();
result();
result();
result();

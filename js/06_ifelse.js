// 조건문
//const isShow = true;
//(!isShow){
//console.log("show");

//}eles{
//    console.log(hide);}

//const myName = prompt("이름을 입력하세요", "");
//if (myName === "아무개") {
//  console.log(`제 이름은 ${myName}입니다.`);
//} else {
//  console.log(`${myName}님 그 이름이 아닙니다.`);
//}

//const myAge = prompt("현재 나이가 어떻게 되세요?", "");
//const currentAge = 30;
//const numberAge = Number(myAge);

//if (numberAge === currentAge) {
//  console.log(`${myAge}이요? 에? 저랑 동갑이세요?`);
//} else if (numberAge > currentAge) {
//  console.log(`${myAge}에에? 저보다 많으시네요.`);
//} else if (numberAge < currentAge) {
//  console.log(`${myAge}에 저보다 어리다고요?`);//
//}

// 물음표 연산자

const age = prompt("성인이신가요? 나이를 입력하세요.", "");
//const result = age ? 참 : 거짓(켄슬);
//const result = age
//  ? console.log("입력되었습니다.")
// : console.log("입력해주세요.");
const result =
  age > 19 ? console.log("성인인증완료") : console.log("미자는 가세요");

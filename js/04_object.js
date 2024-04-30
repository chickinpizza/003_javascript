// 객체 생성

const user = {
  name: "김김김",
  age: 30,
  address: {
    city: "서울",
    detail: "서울 광진구",
    postNumber: 12345,
  },
};
const userB = {
  name: "박박박",
  age: 35,
  address: {
    city: "대구",
    detail: "대구 중구",
  },
};
console.log(user.address?.postNumber || "우편번호가 없습니다.");
//저 물음표는 조건이래 ||는 예

// 객체접근
console.log(user.address.postNumbe);

// 선택적 체이닝
console.log(user.address?.postNumber || "우편번호가 없습니다.");

// 구조분해 할당
const { name: realName, age, address } = user;
const { city, detail, postNumber } = address;
console.log(realName);

//배열과 매소드

//delete
//삭제하면 요소는 지워지는데 자리는 남아있음. 출력하면 undefined

//splice 
//let arr1 = ["I", "study", "javascript"];
//arr1.splice(1,1); // 1번부터 1개의 요소를 제거하라

//추가
//let arr2 = ["I", "study", "javascript", "right", "now"];
//arr2.splice(0, 3, "let's", "go");
//alert(arr2); //"let's", "go", "right", "now"

let arr6 = ["123", "456", "789"];

arr6.slice(0, 1);

console.log(arr6);
// 추출해주는애, 원래 배열에서 지워지지 않음

//concat()
// 배열과 배열이 합쳐져서 새로운 배열을 만든다.

//forEach()

// indexof() :  배열이 자리한 위치 숫자를 알려줌 , NaN 못찾음
// includes() : 배열에 요소가 있는지 없는지 t/f로 알려줌 , NaN 찾음

//find() : foreach랑 비슷함, 조건에 부합하는 한가지 요소만 가져다주고 없어짐, 두번째는 없음
//filter() : find()한번만 쓰고 버림, filter ->조건에 맞는 요소 다 가지고 옴.

// map(): 배열에서 가져와서 조건 실행하고 새로운 배열로 반환해준다. (기존 배열 아님)

// sort(): 정렬

//split(): 문자열을 잘라서 배열로 만든다.
let str = "1,2,3,4,5,6,7";
arr = str.split(",");
console.log(arr);
[]

//join(): 배열을 붙여서 문자열로 만든다. ()괄호 안에 들어있는게 변형 기준임.

//reduce(): 

// Array.isArray(): 이게 배열이냐 (t/f로 출력됨)


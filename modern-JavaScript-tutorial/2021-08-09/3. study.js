let arr = ["12", "김제이에스", 1, 16, 25, "삼십"];
let sum = 0;

for (let key of arr) {
    if (typeof key == "number") {
        sum = sum + key
        console.log(sum);
    }
}

//

// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] == "string") {
//         arr[i] = 0;
//     }
//     sum = sum + arr[i];
// }

// console.log(sum);
//







// let stop = true;
// let sum = 0;

// while (stop) {
//     arr = prompt("문자나 숫자를 입력해주세요");
//     if (arr == "" || arr == null) {
//         stop = false;
//     }
// }

// console.log();
let ball = new Array(45);

// 45개의 각 공에다 숫자를 입력해주는 for문
for (let i = 0; i < ball.length; i++) {
    ball[i] = i + 1;
}

let tmp = 0;
let j = 0;

// tmp, i, j 끼리 서로 한번씩 바꿈, 랜덤 숫자 중에 같은숫자가 나오지 않게 하기 위해서.
// 1-45 사이에 랜덤으로 바뀐 숫자 끼리 자리 바뀜
for (let i = 0; i < 6; i++) {
    j = Math.floor(Math.random() * 45) + 1;
    tmp = ball[i];
    ball[i] = ball[j];
    ball[j] = tmp;
    console.log(ball);
}

for (let i = 0; i < 6; i++) {
    console.log(`ball[${i}] = ${ball[i]}`);
}



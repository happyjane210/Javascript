// 테이블 탐색

// table.rows  = <tr>
// table.caption = <caption>
// table.tHead = <thead>
// table.tFoot = <tfoot>
// table.tBodies = 여러가지 <tbody> 요소 컬렉션, table에 최소 한개는 있어야함

// tbody.rows  각 구역안의 <tr>
// thead.rows
// tfoot.rows

// tr.cells = <tr> 안에 <td> <th>(제목셀,굵은글씨,시멘틱) 컬렉션 반환
// tr.sectionRowIndex = <tr> 표세로열이 <thead><tbody><tfoot> 에서 몇번째 줄에 있는지 반환
// tr.rowIndex = table 안에서 <tr>이 몇번째 줄인지 반환

// td.cellIndex = <tr> 안에서 (한줄) <td>,<th> 가 몇번째 열인지 숫자를 반환


let td = table.rows[0].cells[1];
let tr = table.rows[1].cells[0];
console.log(td);
console.log(tr);

td.style.backgroundColor = "red";
tr.style.backgroundColor = "green";







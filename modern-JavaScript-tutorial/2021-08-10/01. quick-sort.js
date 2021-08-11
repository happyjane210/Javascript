let arr = [5, 1, 3, 7, 9, 2, 4];

function quickSort(arr) {
    if (arr.length == 1) {
        return arr[0]
    };
    let lt = [];
    let gt = [];
    let pivot = arr[0];

    for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            lt.push(arr[i]);
        } else {
            gt.push(arr[i]);
        }
    }
    console.log(`${lt},[${pivot}],${gt}`);
    return quickSort(lt).concat(pivot, quickSort(gt));
}
arr = quickSort(arr);

console.log(arr);
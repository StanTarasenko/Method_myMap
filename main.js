function myMap(arr, callback) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
const currentItem = arr[i];
    newArr[i] = callback(currentItem, i, arr);
    }
    return newArr;
}

let givenArr = [1, 2, 3, 4];

const res = myMap(givenArr, (currentItem) => {
    return currentItem * 2;
});

console.log(res);
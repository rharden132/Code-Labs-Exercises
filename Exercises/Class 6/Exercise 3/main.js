function product(arr = []){
    let sum = 0;
    let a = [];
    for (let i of arr){
         a.push(i[0] * i[1]);
    }
    for(let j of a){
        sum += j;
    }

    return Number(sum);
}
let arr1 = [[1,2], [1,1], [2,3]];
let arr2 = [[10,2], [5,0], [2,3]];
let arr3 = [[1,2], [2,3], [3,4]];
let arr4 = [[1,2], [0,3], [3,0]];
console.log(product(arr1));
console.log(product(arr2));
console.log(product(arr3));
console.log(product(arr4));
function convertToArray(obj){
    let arr = Object.keys(obj);
    let arr2 = [];
    console.log(arr);
    for (let key of arr){
        let arr3 = [];
        arr3.push(key);
        arr3.push(obj[key]);
        arr2.push(arr3);
    }
    console.log(arr2);
}
convertToArray({ a: 1, b: 2 , c: 3});
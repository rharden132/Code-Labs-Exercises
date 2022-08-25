let arr1 = [];
let arr2 = [];
function sorter(obj){
    let numOfProperties = Object.keys(obj).length;
    for (let i = 0; i < numOfProperties; i++){
        arr1.push(Object.keys(obj)[i]);
    }
    arr1.sort();
    for (item of arr1){
        arr2.push(obj[item]);
    }
    console.log(arr1);
    console.log(arr2);
}
let object = {
    firstName: "Riley",
    age: 22,
    lastName: "Harden"
}
sorter(object);
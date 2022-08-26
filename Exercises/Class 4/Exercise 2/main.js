function countTrues(arr){
    let num = 0
    for (item of arr){
        if (item === true){
            num++;
        }
    }
    console.log(num);
}
let array = [true, false, true, true, false];
countTrues(array);
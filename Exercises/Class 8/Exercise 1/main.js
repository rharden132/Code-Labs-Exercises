function sumOfNums(baseNumber){
    return function (num2){
        return baseNumber + num2;
    }
}
const plusFive = sumOfNums(5);
console.log(plusFive(3));
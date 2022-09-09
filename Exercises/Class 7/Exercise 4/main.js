function getBudgetSum(arr){
    let sum = 0
    arr.forEach(person => {
        sum += person.budget;
    });
    console.log("Budget Sum: ", sum);
}
getBudgetSum([
    { name: "John",  age: 21, budget: 29000 },
    { name: "Steve",  age: 32, budget: 32000 },
    { name: "Martin",  age: 16, budget: 1600 }
  ]);
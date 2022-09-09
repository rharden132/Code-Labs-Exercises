const drinks = [
    { name: "lemonade", price: 50 },
    { name: "lime", price: 10 },
    {name: "coke", price: 20}
];

function drinkSortedByPrice(arr){
    let arr2 = arr.sort((a, b) => (a.price - b.price));
    console.log(arr2);
}
drinkSortedByPrice(drinks);
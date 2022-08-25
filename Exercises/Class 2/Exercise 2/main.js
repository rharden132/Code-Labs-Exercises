let foodItems = [
    {
        name: "Apple",
        price: 1.25
    },
    {
        name: "Grape",
        price: 0.25
    },
    {
        name: "Plum",
        price: 2.25
    }
];
for(foods of foodItems){
    let item = document.createElement("li");
    const l = document.getElementById("list");
    l.appendChild(item);
    item.textContent = foods.name;

};
const button = document.querySelector(".btn-change-color");
const txt = document.querySelector(".txt");
function changeColors(){
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = `#${randomColor}`;
    txt.style.color = `#${randomColor + 100}`;
}
button.addEventListener("click", changeColors);
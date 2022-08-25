//modified for taking input!:)
function multiples(num, length){
    let s = "";
    for(let i = 0; i < length; i++){
        let n = Number(num) + (Number(num) * i);
        console.log(n);
        s += n + " ";
    }
    return s;
}
function submit(){
    let number = document.getElementById("num").value;
    let length = document.getElementById("length").value;
    let disp = document.getElementById("display");
    console.log(number);
    console.log(length);
    let str = multiples(number, length);
    disp.innerText = str;
    console.log(str);
}
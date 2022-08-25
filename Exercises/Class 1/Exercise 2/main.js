const headingOne = document.querySelector("h1");

let onOff = true;

//Function to change color with button
function changeColor(){
    //modified to turn on and off with button press!
    if (onOff){
        headingOne.style.color = "red";
    }else
    {
        headingOne.style.color = "black";
    }
     onOff = !onOff;
}
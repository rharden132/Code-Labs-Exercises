
    //Select the first h1 element
    const headingOne = document.querySelector("h1");

    //Selct h2
    const headingTwo = document.querySelector(".heading-two");

    //Selects body element
    const bodyEl = document.querySelector("body");
    
    //Change "headingOne" text
    headingOne.innerText = "Updated from Javascript";

    //Change headingTwo color
    headingTwo.style.color = "red";

    let onOff = true;

    //Function to change color with button
    function changeColor(){
        //modified to turn on and off with button press!
        if (onOff){
            bodyEl.style.backgroundColor = "#0c4a6e";
            headingOne.style.color = "#f0f9ff";
            headingTwo.style.color = "blue";
        }else
        {
            bodyEl.style.backgroundColor = "white";
            headingOne.style.color = "black";
            headingTwo.style.color = "black";
        }
        onOff = !onOff;
    }

const firstName = document.querySelector(".firstname-input");
const lastName = document.querySelector(".lastname-input");
const age = document.querySelector(".age-input");
const form = document.querySelector(".user-info");
const userList = document.querySelector(".user-list");
const USERS = JSON.parse(localStorage.getItem("users")) || [];


form.addEventListener("submit", makeNewUser);

displayUserInfo();


function makeNewUser(e){
    e.preventDefault();
    const aUser = {
        namef: firstName.value,
        namel: lastName.value,
        AGE: age.value
    };
    USERS.push(aUser);
    displayUserInfo();
    saveInfo();
    form.reset();

}

function displayUserInfo(){
    while(userList.firstChild){
        userList.removeChild(userList.firstChild);
    }
    for (let user of USERS){
        const userBlock = document.createElement("li");
        userBlock.innerHTML = `<li>${user.namef}</li><li>${user.namel}</li><li>${user.AGE}</li>`;
        userList.appendChild(userBlock);
    }
}

function saveInfo(){
    localStorage.setItem("users", JSON.stringify(USERS));
}
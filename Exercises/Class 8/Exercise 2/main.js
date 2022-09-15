function checkCaps(str){
    const letter = str.charCodeAt(0);
    if(letter % 2 == 0){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }else{
        return str.charAt(0).toLowerCase() + str.slice(1);
    }
}
console.log(checkCaps("Ello there!"));
function redundantReturn(str){
    return function(){
        console.log("Str printed: ", str);
    }
}
const rR = redundantReturn("Hello");
rR();
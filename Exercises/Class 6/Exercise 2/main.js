function arrayInOrder(start, end){
    let arr = [];
    if(start < end){
        for(i = start; i <= end; i++){
            arr.push(i);
        }
        console.log(arr);
    }
    else if(start > end){
        for(i = start; i >= end; i--){
            arr.push(i);
        }
        console.log(arr);
    }
    else{
        console.log(start, end);
    }
}
arrayInOrder(2, 7);
arrayInOrder(2, 2);
arrayInOrder(7, 2);
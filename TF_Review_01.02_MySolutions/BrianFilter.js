function filter(arr,fn){
    var newArr = []
    for(i=0;i<=arr.length;i++){
        if(fn(arr[i])) newArr.push(arr[i])
    }
    // console.log(newArr);
    return newArr;
}
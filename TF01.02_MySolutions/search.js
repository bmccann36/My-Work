function search(fn){
    var arr = this
    var matches = 0
    for(var i = 0;i<=arr.length-1;i++){
        debugger;  // base case
        if(!Array.isArray(arr[i])){
            var input = arr[i]
            if(fn(arr[i])) matches ++
            }
            else{ //recursive
             matches += search.call(arr[i],fn)
            }
        } 
         return !!matches
}
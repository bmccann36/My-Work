function difference(arr1,arr2){
    // takes in two arrays
    // returns all elements in one that are not in two
    // go through arr1 one element at a time arr2.contains(that element?)
    
    var difference = arr1.filter(function(val){
       return !arr2.includes(val)
    })
    return difference;
}

function symmetricDiff(arr1,arr2){

    // difference gives us unique elements in 1st arg
    // so get unique elements in 2 relative to one 
    // combine result of difference(1) and difference (2)
    var unique1 = difference(arr1,arr2)
    var unique2 = difference(arr2,arr1)
   
    var output = unique1.concat(unique2)
    return(output);
}

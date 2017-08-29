function accessor(obj){
  
    return function accessExample(key,val){
        if(val) {   // only set val if new val is passed 
            obj[key]= val;  // since key is a param name must use []
        }
        console.log(obj[key])
        return obj[key];   // either way return the valueq
   
    }
}

// old school way

// Array.prototype.slice.call(arguments);

  // return function(...newKey){
    //     console.log(newKey)
    //     return obj[key];
    // }
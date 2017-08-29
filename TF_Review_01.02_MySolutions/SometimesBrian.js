
function sometimes(passedFn){
    var counter = 0
        return function(){ 
        counter ++
        if(counter<4 || counter%2!=0){
            return passedFn.apply(null, arguments)
            }
        else return 'I do not know!'
        }
    }
// in an earlier version I invoked anonymous like this 
// return function(...arg)
// however in es6 it seems that apply will except the arguments
// obj -- no need to turn it into actual array 





// var argsArr = Array.prototype.slice.call(arguments);
// console.log(argsArr);



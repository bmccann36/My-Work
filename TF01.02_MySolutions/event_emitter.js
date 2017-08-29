function MyEventEmitter(){
    this.events = {}   
}

MyEventEmitter.prototype.addListener = function(msg,fn){
    // debugger;
    if (!this.events[msg]) this.events[msg] = [fn]
    else this.events[msg].push(fn)
 
}

MyEventEmitter.prototype.emit = function(name) {

    var args = [].slice.call(arguments,1);
    // console.log(this.events[name])
    this.events[name].forEach(function(index,i){
        console.log(args[i][0])
     index.apply(null, args[i]);
    });
  };







// MyEventEmitter.prototype.emit = function(){
//     var instruction = (arguments[0])
//     // debugger;
//     // var numFuncs = this.events[event].length
//     var funcArr = (this['events'][instruction])
//     for(var i=0;i<=funcArr.length-1;i++){
//         // console.log(arguments[i+1])
//         var func = funcArr[i]
//         // console.log(func('sally'))
//         console.log( funcArr[i]())
//         // console.log(func(arguments[i+1]))
//     }
   
    



 
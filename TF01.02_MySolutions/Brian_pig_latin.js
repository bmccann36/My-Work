
var vowels = ['a','e','i','o','u']

function translate(str){
  var wordsArr= (str.split(' '));
  var outArr = []
  wordsArr.forEach((word)=>outArr.push(translateWord(word)))
  // console.log(outArr)
  return outArr.join(' ')
}






function translateWord(str){
  var strArr = str.split('')
  // find slice index 
  for(var i=0;i<=str.length;i++){
    if(str[i]=='q'&& str[i+1]== 'u') i+=2;
    if(vowels.includes(str[i])){
      var slcInd = i
      break;
    }
  }
  var root = str.slice(slcInd)
  var cons = str.slice(0,slcInd)
  if(!cons.length) {
    return root + "ay"
  }
  else {
    return root + cons + 'ay'
  }
}


`

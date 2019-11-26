let musicians = [];
let instruments = [];
 
function theBeatlesPlay(musicians,instruments){
  let array = []; 
  for(let i = 0; i < musicians.length; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(array){
  let i = 0;
  let arr = []
  while(i < array.length){
    arr.push(`${array[i]}!!!`)
  }
  return arr
}
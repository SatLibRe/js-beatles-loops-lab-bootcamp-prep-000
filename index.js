let musicians = [];
let instruments = [];
 

function theBeatlesPlay(musicians,instruments){
  let array = []
  let i = 0; 
  while(i < musicians.length) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
    i++; 
  }
  return array
}

function johnLennonFacts(facts){
  let array = []; 
  let i = 0; 
  while(i < facts.length){
    array.push(`${facts[i]}!!!`)
    i++;
  }
  return array
}
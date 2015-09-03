var findType = function (array) {
  if(typeof array == 'string'){
    array = [array];
  }
  return array;
};

var sameLength = function (string, word) {
  if(word.length === string.length){
    return true;
  } 
}

var wordSort = function (string, word) {
  if(word.toLowerCase().split('').sort().join('') === string.toLowerCase().split('').sort().join('')){
    return true;
  }
}

var lowerCase = function (string, word) {
  if(word.toLowerCase() != string.toLowerCase()){
    return true;
  }
}

var anagram = function (string, array) {
  var result = [];
  findType(array).forEach(function (word) {
    if(sameLength(string, word) && lowerCase(string, word) && wordSort(string, word)){
      result.push(word)
    }
  })
  return result;
}

console.log(anagram("ant", ['tan', 'stand', 'at']));
console.log(anagram("master", ['stream', 'pigeon', 'maters']));
console.log(anagram("galea", ["eagle"]));
console.log(anagram("good", ['dog', 'goody']));
console.log(anagram("Orchestra", ['cashregister', 'Carthorse', 'radishes']));
console.log(anagram('dog', 'god'));

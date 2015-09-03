var findType = function (array) {
  if(typeof array == 'string'){
    array = [array];
  }
  return array;
};

var wordSort = function (string, word) {
  return (word.toLowerCase().split('').sort().join('') === string.toLowerCase().split('').sort().join(''))
};

var isMatch = function (string, word) {
  return (word.length === string.length && word.toLowerCase() != string.toLowerCase() && wordSort(string, word))
};

var anagram = function (string, array) {
  var result = [];
  findType(array).forEach(function (word) {
    if(isMatch(string, word)){ result.push(word) }
  })
  return result;
};

console.log(anagram("ant", ['tan', 'stand', 'at']));
console.log(anagram("master", ['stream', 'pigeon', 'maters']));
console.log(anagram("galea", ["eagle"]));
console.log(anagram("good", ['dog', 'goody']));
console.log(anagram("Orchestra", ['cashregister', 'Carthorse', 'radishes']));
console.log(anagram('dog', 'god'));

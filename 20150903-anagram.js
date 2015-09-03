var word = "Orchestra"
var words = ['cashregister', 'Carthorse', 'radishes']

var anagram = function (string, array) {
  var result = [];
  array.forEach(function (word) {
    if(word.length === string.length){
      newWord = word.toLowerCase();
      string = string.toLowerCase();
      if(newWord != string){
        if(newWord.split('').sort().join('') === string.split('').sort().join('')){
          result.push(word)
        }
      }
    }
  })
  return result;
}

console.log(anagram(word, words));

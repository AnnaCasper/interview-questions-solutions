//Implement an algorithm to determine if a string has all unique characters.

var unique = 'abc2'
var notUnique = 'abca1'

var uniqueCharsWithArray = function (string) {
  var array = string.split('');
  var result = 'String contains all unique characters.'
  array.forEach(function(val, i){
    array.forEach(function(elm, j){
      if(i != j){
        if(val === elm) {
          result = 'String does not contain all unique characters.'
        }
      }
    })
  })
  return result;
}

// console.log(uniqueCharsWithArray(unique));
// console.log(uniqueCharsWithArray(notUnique));

//No more than O(n) time - only one loop:

var uniqueCharsOneLoop = function (string) {
  var array = string.split('');
  var result = 'String contains all unique characters.'
  var newObj = {};
  array.forEach(function(val, i, array){
    if(newObj[val]){
      result = 'String does not contain all unique characters.'
    }
    newObj[val] = val
  })
  return result
}

console.log(uniqueCharsOneLoop(notUnique));
console.log(uniqueCharsOneLoop(unique));

//What if you cannot use additional data structures?

var uniqueChars = function(string) {
  var result = 'String contains all unique characters.'
  for (var i = 0; i < string.length; i++) {
    for (var j = 0; j < string.length; j++) {
      if(i != j){
        if(string.charAt(i) === string.charAt(j)){
          result = 'String does not contain all unique characters.'
        }
      }
    }
  }
  return result;
}

// console.log(uniqueChars(notUnique));
// console.log(uniqueChars(unique));

//Constant time:
var uniqueCharsConstant = function (string) {
  if(string.length <= 0){
    return "String contains all unique characters.";
  } else {
    var array = string.split('');
    var newObj = {};
    array.forEach(function(val, i, array){
      if(newObj[val]){
        return 'String does not contain all unique characters.'
      }
    })
    var newArray = array.slice(i, array.length-1)
    console.log(newArray.length);
    var newString = newArray.join()
    return uniqueCharsConstant(newString)
  }
}

//console.log(uniqueCharsConstant(notUnique));
console.log(uniqueCharsConstant(unique));

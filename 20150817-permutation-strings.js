//Given two strings, write a method to decide if one is a permutation of the other.

var permutation = function(str1, str2){
  if(str1.length === str2.length){
    var result = 0;
    var array1 = str1.split('');
    var array2 = str2.split('');
    for (var i = 0; i < array1.length; i++) {
      if(array2.indexOf(array1[i]) > -1){
        result += 1
      }
    }
    if(result === str1.length){
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}

console.log(permutation('abc', 'bca'));
console.log(permutation('abc', 'bda'));

//Assume you have a method isSubstring which checks if one word is a substring of another.
//Given two strings, write code to check if one is a rotation of another using only one call to isSubstring.
var str1 = 'helloworld'
var str2 = 'worldhello'
var str3 = 'notthesamestring'

var stringSort = function (str1, str2) {
  var new1 = str1.split('').sort().join('')
  var new2 = str2.split('').sort().join('')
  if(new1.length > new2.length){
    return new1.indexOf(new2)
  } else {
    return new2.indexOf(new1)
  }
}

// console.log(stringSort(str1, str2));
// console.log(stringSort(str1, str3));

//Implement a method to perform basic string compression using the counts of repeated characters.
var string = 'aaaabbbbccdddeeeeeffGHAAA'
var compressString = function (string) {
  var array = string.split('');
  var accum = 1;
  var letter = ''
  var result = ''
  array.forEach(function (char, i, array) {
    if(letter === char){
      accum += 1
    } else {
      result += letter + accum
      letter = char
      accum = 1;
    }a
  })
  result = result.slice(1, result.length-1)
  if (result.length > string.length) {
    return string
  } else {
    return result
  }
}

console.log(compressString(string))

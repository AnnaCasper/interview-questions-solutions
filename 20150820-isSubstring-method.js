//Assume you have a method isSubstring which checks if one word is a substring of another.
//Given two strings, write code to check if one is a rotation of another using only one call to isSubstring.
var str1 = 'helloworld'
var str2 = 'worldhello'
var str3 = 'notthesamestring'

var new1 = str1.split('').sort().join('')
var new2 = str2.split('').sort().join('')
var new3 = str3.split('').sort().join('')

var isSubstring = function (str1, str2) {
  if(str1.indexOf(str2) >= 0 || str2.indexOf(str1) >= 0){
    return true
  } else {
    return false
  }

}

console.log(isSubstring(new1, new2));
console.log(isSubstring(new1, new3));

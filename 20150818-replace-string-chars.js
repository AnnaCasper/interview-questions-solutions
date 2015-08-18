//Write a method to replace all spaces in a string with '%20'

var replaceChars = function(string){
  return string.replace(/ /g, '%20')
}

console.log(replaceChars('    hello   '));

var replaceCharsLoop = function(string){
  var array = string.split('');
  for (var i = 0; i < array.length; i++) {
    if(array[i] === ' '){
      array.splice(i, 1, '%20')
    }
  }
  return array.join('')
}

console.log(replaceCharsLoop('    hello   '));

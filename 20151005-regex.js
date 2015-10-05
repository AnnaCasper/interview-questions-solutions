//Given any string, if a word is repeated, it should be wrapped in strong tags.

var string = 'This is is a test'

var strongWrap = function (str) {
  var regex = /(\b\w+\b) (\1)/
  return str.replace(regex, '$1 <strong>$2</strong')
}

console.log(strongWrap(string));

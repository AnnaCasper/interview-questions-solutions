var str1 = "Morning";
var str2 = 'one afternoon';

var noRepeat = function (str) {
  var arr = str.split('');
  var result = '';
  var newArray;a
  for (var i = 0; i < arr.length; i++) {
    newArr = arr;
    console.log(newArr);
    newArr.splice(i, 1)
    console.log(newArr);
    console.log(newArr.indexOf(arr[i]));
    if(newArr.indexOf(arr[i]) < 0){
      result += arr[i]
    }
  }
  return result
}

console.log(noRepeat(str1));
console.log(noRepeat(str2));

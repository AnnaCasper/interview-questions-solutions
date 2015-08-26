//write a function that takes an array and two array positionsand then swaps \
//out the two number in that array at those 2 positions

var arr = [3,22,5,7,96]

var swapMe = function (arr, pos1, pos2) {
  var temp = arr[pos2];
  arr[pos2] = arr[pos1];
  arr[pos1] = temp
  return arr
}

var swapped = swapMe(arr, 0, 4);


console.log(swapped);
a
var bubbleSort = function (arr) {
  var temp = 0
  for (var j = 0; j < arr.length; j++) {
    for (var i = 0; i < arr.length; i++) {
      if(arr[i] > arr[i + 1]){
        temp = arr[i];
        arr[i] = arr[i+1]
        arr[i+1] = temp
      }
    }
  }
  return arr
}

console.log(bubbleSort(arr))

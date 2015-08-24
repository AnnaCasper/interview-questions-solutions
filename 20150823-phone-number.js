var phoneNumber = ['414-232-4452', '262-308-8694', '212-221-2211', '999-999-9999'];
// var sum = 0
// for (var i = 0; i < phoneNumber.length; i++) {
//     console.log(sum += parseInt(phoneNumber[i].split()));
// }

var lengthArray = []
for (var i = 0; i < phoneNumber.length; i++) {
  var newNumber = phoneNumber[i].split()
  newNumber = newNumber[0].split('');
  var sum = 0;
  for (var j = 0; j < newNumber.length; j++) {
    if(newNumber[j] != "-"){
      sum += parseInt(newNumber[j])
    }
  }
  lengthArray.push(sum)
}

var largest = 0;
for (var i = 0; i < lengthArray.length; i++) {
  if(lengthArray[i] > largest){
    largest = lengthArray[i]
  }
}
var index = lengthArray.indexOf(largest)
console.log(phoneNumber[index]);

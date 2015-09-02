var string= "Mississippi";
sub = string.indexOf('iss');
//console.log(sub);

var search = function (str) {
  var array = ['Anna', 'Emily', 'Andrea', 'Drew', 'Laura'];
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if(array[i].toLowerCase().indexOf(str) >= 0){
      result.push(array[i])
    }
  }
  return result;
}

//console.log(search('dre'));

var fuzzy = function (str) {
  var array = ['Anna', 'Clarkson', 'Andrea', 'Drew', 'Laura', 'Steven'];
  var newArray = str.split('')
  var results = [];
  console.log(results);
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < newArray.length; j++) {
      var result = 0;
      if(array[i].toLowerCase().indexOf(newArray[j].toLowerCase()) >= 0){
        result += array[i].toLowerCase().indexOf(newArray[j])
      }
    }
    if(result >= 3){
      results.push(array[i])
    }
  }
  return results;
}

console.log(fuzzy('Stevo'));

var fuzzyRefactor = function (str) {
  var array = ['Anna', 'Clarkson', 'Andrea', 'Drew', 'Laura'];
  var newArray = str.split('')
  var results = [];
  array.forEach(function (name) {
    newArray.forEach(function (char) {
      var result = 0;
      if(name.toLowerCase().indexOf(char.toLowerCase()) >= 0){
        result += name.toLowerCase().indexOf(char)
      }
    })
  })
  if(result >= 3){
    results.push(array[i])
  }
  return results;
}

// console.log(fuzzyRefactor('Clerk'));

var result = 0;

var appearing = function (compare, str) {
  if(compare.indexOf(str) < 0){
    return result;
  } else if(compare.indexOf(str) >= 0){
    var sub = compare.substring(compare.indexOf(str) + str.length, compare.length)
    result += 1
    return appearing(sub, str)
  }
}

// console.log(appearing('Mississippi', 'iss'));

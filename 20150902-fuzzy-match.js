function search(criteria, arrayToSearch, fuzzyOrNo, tolerance) {
  var filtered = [];
  arrayToSearch.forEach(function (name) {
    var matchCount = 0;
    var nameLength = name.length;
    if (fuzzyOrNo === true) {
      for (var i = 0; i < criteria.length; i++) {
        if(name.toLowerCase().match(criteria[i].toLowerCase())){
          matchCount++;
          name.slice(name.indexOf(criteria[i]),1);
        }
      }
      if (Math.abs(matchCount - nameLength) <=tolerance && Math.abs(criteria.length - nameLength) <=tolerance) {
        filtered.push(name);
      }
    }
    else if (name.toLowerCase().indexOf(criteria.toLowerCase()) > -1) {
      filtered.push(name);
    }
  });
  console.log(filtered);
  return filtered;
}
search('Marcos', names, true, 1);
search('Marcos', names, true, 3);

//create search logic
function deDupe(arr) {
var i,
    len=arr.length,
    out=[],
    obj={};

for (i=0;i<len;i++) {
  obj[arr[i]]=0;
}
for (i in obj) {
  out.push(i);
}
return out;
}

var namesArray = ["mike", "dave", "jack", "marry", "jim", "jill", "june", "grey", "greg", "mark", "derrek", "richard", "bmw"]

var searchFunc = function (input,term) {
  var matches = 0;
  var matchingNames = [];
  var fuzzyMatch = {};
  var search = term.toLowerCase();

  for (var i = 0; i < input.length; i++) {
    fuzzyMatch[input[i]] = [];
    if(input[i] === search){
      matches += 1;
      matchingNames.push(input[i] + " Exact match")
    } else {
      for (var j = 0; j < input[i].length; j++) {
        if(input[i][0] === search[0]){
          if(input[i][j] === search[j]){
            fuzzyMatch[input[i]].push(search[j]);
          }
        }
      }
    }
    for (key in fuzzyMatch) {
      var nameLength = key.length;
      var matchedLength = fuzzyMatch[key].length;

      if(nameLength <= 3){
       if(fuzzyMatch[key].length >= 2){
         matchingNames.push(key + " Fuzzy match")
       }
      } else {
        if(fuzzyMatch[key].length >= 3){
          matchingNames.push(key + " Fuzzy match")
        }
      }
    }
  }

  return {searchName: term, matchingNames: deDupe(matchingNames)}
}

//console.log(searchFunc(namesArray,"mike"));
console.log(searchFunc(namesArray,"dirrek"));

var names = ['amanada', 'pharrell', 'duke', 'lewis', 'janet']
var searchArr= []
var found_names = [];
function searchText(argument) {
  for (var i = 0; i < names.length; i++) {
    indices = findIndices(argument[0], names[i]);
    for (var a = 0; a < indices.length; a++) {
      mini_string = names[i].substring(indices[a],indices[a]+argument.length);
      if ((mini_string.length >= argument.length) && (fuzzyMatch(argument, mini_string))){
        if(!inArray(found_names,names[i])){
          found_names.push(names[i]);
        }
      }
    }
  }
  return found_names;
}

function fuzzyMatch(argument, mini_string){
  var tolerance = 2;
  var bad_matches = 0;
  for (var i = 0; i < argument.length; i++) {
    if(argument[i] != mini_string[i]){
      bad_matches ++;
    }
  }
  if (bad_matches > tolerance) {
    return false;
  } else {
    return true;
  }
}

function inArray(array,item){
  return array.indexOf(item) != -1;
}


function findIndices(firstLetter, name){
  var arr=[]
  for (var i = 0; i < name.length; i++) {
    if(name[i] === firstLetter)
    arr.push(i);
  }
  return arr;
}

console.log(searchText('harry'));

var romanNumerals = {
 'M': 1000,
 'D': 500,
 'C': 100,
 'L': 50,
 'X': 10,
 'V': 5,
 'I': 1
};

var roman = function (input, num) {
  if(input.length === 0){
    return num;
  } else {
    num += romanNumerals[input.charAt(0)];
    return roman(input.substring(1), num);
  }
}

console.log(roman('VII', 0)); //return 7
console.log('***********************');
console.log(roman('XVI', 0)); //return 16


//roman('') + 1
//roman('I') + 1
//roman('II') + 5
//roman('VII')

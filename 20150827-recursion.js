var power = function (base, exponent) {
  if(exponent === 0){
    return 1
  } else {
    return base * power(base, exponent-1)
  }
}


var reverse = function (s) {
  if(s.length == 0){
    return s;
  } else {
    console.log(s);
    console.log(s.substring(1));
    console.log(s.charAt(0));
    return reverse(s.substring(1)) + s.charAt(0)
  }
}

thing = reverse('apple');
console.log(thing);


// ""
// (reverse('') + 'e'
// (reverse('e') + 'l'
// (reverse('le') + 'p'
// (reverse('ple') + 'p'
// (reverse('pple') + 'a'
//
//
//
// ""
// ("" + 'e')
// ("e" + 'l')
// ("el" + 'p')
// ("elp" + 'p')
// ("elpp" + 'a'
// "elppa"

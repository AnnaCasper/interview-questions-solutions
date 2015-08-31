var Coordinates = function (x, y) {
  this.x = x;
  this.y = y;
};

var person1 = new Coordinates(9, 2);
var person2 = new Coordinates(4, 3);
var person3 = new Coordinates(5, 6);
var person4 = new Coordinates(2, 1);
var person5 = new Coordinates(3, 5);
var flag = new Coordinates(3, 3);

var distance = function (person1, person2, person3, person4, person5, flag) {
  var results = [];
  results.push(Math.sqrt(Math.pow((person1.x - flag.x), 2) + Math.pow((person1.y - flag.y), 2)));
  results.push(Math.sqrt(Math.pow((person2.x - flag.x), 2) + Math.pow((person2.y - flag.y), 2)));
  results.push(Math.sqrt(Math.pow((person3.x - flag.x), 2) + Math.pow((person3.y - flag.y), 2)));
  results.push(Math.sqrt(Math.pow((person4.x - flag.x), 2) + Math.pow((person4.y - flag.y), 2)));
  results.push(Math.sqrt(Math.pow((person5.x - flag.x), 2) + Math.pow((person5.y - flag.y), 2)));
  return Math.min(results[0], results[1], results[2], results[3], results[4])
}

console.log(distance(person1, person2, person3, person4, person5, flag));

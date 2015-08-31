var Coordinates = function (x, y) {
  this.x = x;
  this.y = y;
};

var person = new Coordinates(9, 2);
var flag = new Coordinates(3, 3);

var distance = function (person, flag) {
  return Math.sqrt(Math.pow((person.x - flag.x), 2) + Math.pow((person.y - flag.y), 2))
}

console.log(distance(person, flag));

var Coordinates = function (x, y) {
  this.x = x;
  this.y = y;
};

var person = new Coordinates(9, 2);
var flag = new Coordinates(3, 3);

var distance = function (person, flag) {
  var x = (person.x - flag.x)
  var y = (person.y - flag.y)
  var result = (x * x) + (y * y)
  return Math.sqrt(result)
}

console.log(distance(person, flag));

var scheduleA = [
	{
		start: new Date("December 25, 2015"),
		end: new Date("December 26, 2015")
	},
	{
		start: new Date("October 31, 2015"),
		end: new Date("November 1, 2015")
	},
	{
		start: new Date("January 1, 2000"),
		end: new Date("January 1, 3000")
	},
	{
		start: new Date("March 20, 2015"),
		end: new Date("March 21, 2015")
	},
	{
		start: new Date("March 21, 2015"),
		end: new Date("March 22, 2015")
	},
	{
		start: new Date("March 19, 2015"),
		end: new Date("March 20, 2015")
	},
	{
		start: new Date("March 19, 2015"),
		end: new Date("March 22, 2015")
	}
];

var scheduleB = [
	{
		start: new Date("December 24, 2015"),
		end: new Date("December 25, 2015")
	},
	{
		start: new Date("October 31, 2015"),
		end: new Date("November 1, 2015")
	},
	{
		start: new Date("January 1, 2000"),
		end: new Date("January 1, 3000")
	},
	{
		start: new Date("September 25, 2015"),
		end: new Date("September 26, 2015")
	},
	{
		start: new Date("March 21, 2015"),
		end: new Date("March 22, 2015")
	},
	{
		start: new Date("March 17, 2015"),
		end: new Date("March 20, 2015")
	},
	{
		start: new Date("March 19, 2015"),
		end: new Date("March 22, 2015")
	}
];


var scheduleOverlap = function (a, b) {
  var overlapArray = [];
  for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < b.length; j++) {  
      if(b[j].start.getTime() > a[i].start.getTime() && b[j].start.getTime() < a[i].end.getTime()){ //if b start is inbetween a start and end - it overlaps
        overlapArray.push(a[i]);
      } else if (a[i].start.getTime() > b[j].start.getTime() && a[i].start.getTime() < b[j].end.getTime()){ //if a start is inbetween b start and end - it overlaps
        overlapArray.push(a[i]);
      } else if (b[j].end.getTime() < a[i].start.getTime() && b[j].end.getTime() > a[i].end.getTime()){ //if b end is inbetween a start and end - it overlaps
        overlapArray.push(a[i]);
      } else if (a[i].end.getTime() < b[j].start.getTime() && a[i].end.getTime() > b[j].end.getTime()){ //if a end is inbetween b start and end - it overlaps
        overlapArray.push(a[i]);
      } else if (a[i].start.getTime() == b[j].start.getTime() && a[i].end.getTime() == b[j].end.getTime()){
        overlapArray.push(a[i]);
      }
    }
  }
  return overlapArray
}

console.log(scheduleOverlap(scheduleA, scheduleB));

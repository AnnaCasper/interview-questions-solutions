var timespanA = {
    start: new Date("September, 17, 2015"),
    end: new Date("September 18, 2015")
};

var timespanB = {
    start: new Date("September, 16, 2015"),
    end: new Date("September 18, 2015")
};

var timespanC = {
    start: new Date("September, 14, 2015"),
    end: new Date("September 15, 2015")
};

var isOverlapped = function (a, b) {
  if(b.start.getTime() > a.start.getTime() && b.start.getTime() < a.end.getTime()){ //if b start is inbetween a start and end - it overlaps
    return true;
  } else if (a.start.getTime() > b.start.getTime() && a.start.getTime() < b.end.getTime()){ //if a start is inbetween b start and end - it overlaps
    return true;
  } else if (b.end.getTime() < a.start.getTime() && b.end.getTime() > a.end.getTime()){ //if b end is inbetween a start and end - it overlaps
    return true;
  } else if (a.end.getTime() < b.start.getTime() && a.end.getTime() > b.end.getTime()){ //if a end is inbetween b start and end - it overlaps
    return true;
  } else if (a.start.getTime() == b.start.getTime() && a.end.getTime() == b.end.getTime()){
    return true;
  } else {
    return false;
  }
}

console.log(isOverlapped(timespanA, timespanB)); //return true
console.log(isOverlapped(timespanA, timespanC)); //return false

var timespans = {
	christmas: {
		start: new Date("December 25, 2015"),
		end: new Date("December 26, 2015")
	},
	halloween: {
		start: new Date("October 31, 2015"),
		end: new Date("November 1, 2015")
	},
	thisMillenium: {
		start: new Date("January 1, 2000"),
		end: new Date("January 1, 3000")
	},
	event1: {
		start: new Date("March 20, 2015"),
		end: new Date("March 21, 2015")
	},
	event2: {
		start: new Date("March 21, 2015"),
		end: new Date("March 22, 2015")
	},
	event3: {
		start: new Date("March 19, 2015"),
		end: new Date("March 20, 2015")
	},
	event4: {
		start: new Date("March 19, 2015"),
		end: new Date("March 22, 2015")
	}
};

console.log(isOverlapped(timespans.christmas, timespans.thisMillenium)); //true

console.log(isOverlapped(timespans.christmas, timespans.halloween)); //false

console.log(isOverlapped(timespans.event1, timespans.event1)); //true

console.log(isOverlapped(timespans.event1, timespans.event2)); //false

console.log(isOverlapped(timespans.event1, timespans.event3)); //false

console.log(isOverlapped(timespans.event1, timespans.event4)); //true

console.log(isOverlapped(timespans.event4, timespans.event1)); //true

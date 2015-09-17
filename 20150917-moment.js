var moment = require('./bower_components/moment/min/moment.min.js');


var timespanA = {
    start: moment("2015-09-17"),
    end: moment("2015-09-18")
};

var timespanB = {
    start: moment("2015-09-16"),
    end: moment("2015-09-18")
};

var timespanC = {
    start: moment("2015-09-14"),
    end: moment("2015-09-15")
};

var isOverlapped = function (a, b) {
  if(b.start.unix > a.start.unix() && b.start.unix() < a.end.unix()){ //if b start is inbetween a start and end - it overlaps
    return true;
  } else if (a.start.unix() > b.start.unix() && a.start.unix() < b.end.unix()){ //if a start is inbetween b start and end - it overlaps
    return true;
  } else if (b.end.unix() < a.start.unix() && b.end.unix() > a.end.unix()){ //if b end is inbetween a start and end - it overlaps
    return true;
  } else if (a.end.unix() < b.start.unix() && a.end.unix() > b.end.unix()){ //if a end is inbetween b start and end - it overlaps
    return true;
  } else if (a.start.unix() == b.start.unix() && a.end.unix() == b.end.unix()){
    return true;
  } else {
    return false;
  }
}

console.log(isOverlapped(timespanA, timespanB)); //return true
console.log(isOverlapped(timespanA, timespanC)); //return false

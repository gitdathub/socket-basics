var moment = require('moment');
var now = moment();

console.log(now.format('MMM Do YYYY h:mma'));


console.log(now.format('x'));

//now.valueOf() parse to INT for manipulation


var timestamp = now.valueOf(),
    timestampMoment = moment.utc(timestamp);


console.log(timestampMoment.format('h:mm a'));


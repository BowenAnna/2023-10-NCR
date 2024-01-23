console.log(module);
module.exports = 'PerScholas';
let daysOfWeek = require('./days-of-week');
console.log(daysOfWeek);
module.exports.weekdays =
	['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

module.exports.getWeekday = function(dayNo) {
	if (dayNo < 0 || dayNo > 6) dayNo = 0;
	return this.weekdays[dayNo];
};
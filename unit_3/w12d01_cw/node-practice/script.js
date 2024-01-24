const multiply=(a, b)=>a*b;
let n = multiply(5, 8);
console.log(n);

///////////////////////////////
// const fs = require('fs');
// console.log(typeof fs);

// fs.writeFile('./hello.txt', 'Hello!', function() {
//   console.log('done creating file');
// });

// ///////////////////////////////
// let daysOfWeek = require('./days-of-week');
// let day=daysOfWeek.getWeekday(5);
// console.log(day);

// const request = require('request');
// request(
// 	'http://jsonplaceholder.typicode.com/users',
// 	function(err, res, body) {
// 		console.log(body);
// 	}
// );

///////////////////
// const random = require('./random');
//   for (let i = 0; i < 10; i++) {
//   	console.log( random(100, 200) );
//   }

  //////////////////////
  const circle = require('./circle');
  console.log( circle.area(50) );  // 7853.98...
  console.log( circle.circ(75) );  // 471.23...
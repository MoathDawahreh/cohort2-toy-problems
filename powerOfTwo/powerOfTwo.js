/*
2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
Calculate the sum of the digits of the number 2^1000?
Hint the answer is 1366.
*/

var powerOfTwo = function(num){
	var num = Math.pow(2,num)
    var num = num.toString().split('')
    // var sum = 0 ;
    var num = num.map(Number);
    var sum = num.reduce(function(a, b) {
  		return a + b;
		}, 0);


    // for (var i = 0; i < num.length; i++) {
    // 	sum
    // }
    return sum



}
/*
2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
Calculate the sum of the digits of the number 2^1000?
Hint the answer is 1366.
*/
//

var powerOfTwo = function(num){
	//to avoid e+ for big numbers 
	// break the big numbers to small parts -for example 60-
	// and maybe put the work below in seprate function and invoke it 
	//  -am just saying :p -
	// if (num > 60) {
	// 	n = num/60
	// 	for (var i = 0; i < n+1; i++) {
	// 		Things[i]
	// 	}

	// }
	//parseInt(sum.toString().split('e')[1]);

	var num = Math.pow(2,num)
    var num = num.toString().split('')
    // var sum = 0 ;
    var num = num.map(Number);
    var sum = num.reduce(function(a, b) {
  		return a + b;
		}, 0);


    // for (var i = 0; i < num.length; i++) {
    // 	
    // }
    return sum



}
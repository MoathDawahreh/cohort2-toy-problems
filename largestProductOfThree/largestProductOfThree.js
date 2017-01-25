/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

// handle negative numbers
 var largestProductOfThree = function(array) {
 	var count = 0
 	array.sort()
 	for (var i = 0; i < array.length; i++) {
 		if (array[i]<0) {
 			count++
 		}
 	}
 	if (count<2) {
	 	return array[array.length-1]*array[array.length-2]*array[array.length-3]
 	}
 	if (count > 1) {
 		return array[0]*array[1]*array[array.length-1]
 	}

}

//  var largestProductOfThree = function(array) {
//  	array.sort()
//  	return array[array.length-1]*array[array.length-2]*array[array.length-3]
// };

// var largestProductOfThree = function(array) {
// 	num1 = max(array);
// 	array2 = array.slice(0,array.indexOf(num1))
// 	num2 = max(array2);
// 	array3 =array2.slice(0,array.indexOf(num2))
// 	num3 = max(array3);
// 	return num1*num2*num3
// };


// function max(list){
// 	return Math.max.apply(null, list);
// }

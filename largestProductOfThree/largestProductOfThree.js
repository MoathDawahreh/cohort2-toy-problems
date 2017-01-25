/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

var largestProductOfThree = function(array) {
	num1 = max(array);
	array2 = array.slice(0,array.indexOf(num1))
	num2 = max(array2);
	array3 =array2.slice(0,array.indexOf(num2))
	num3 = max(array3);
	return num1*num2*num3
};


function max(list){
	return Math.max.apply(null, list);
}

/*
 * Given a SORTED array, find the index of an element
 * using a binary search algorithm.
 *
 * Note that you can't just use indexOf. Your function must run in O(log(n)) time.
 *
 * Example usage:
 *
 * 
 * console.log(index); // 4
 */

var binarySearch = function (array, target) {
	var middle = Math.ceil((array.length-1)/2)
	// var first =0,last=array.length-1
	// while(){}
	for (var i = 0; i < array.length; i++) {
		// if (target >array[Math.ceil((array.length-1)/2)]) {
		// }
		if (array[middle] > target) {
			array.slice(0,-(middle)-1)
			middle = Math.ceil((array.length-1)/2)
		}else if (array[middle] < target) {
			array = array.slice(mdiddle+1)
			middle = Math.ceil((array.length-1)/2)

		}
	}

  
};


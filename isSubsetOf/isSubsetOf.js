/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 *
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
*/


/*
 * Extra credit: Make the method work for arrays that contain objects and/or arrays as elements.
*/

Array.prototype.isSubsetOf = function (arr) {
<<<<<<< HEAD
	var flag = false
	// var arrlength = arr.length
	// var count = 0
	// if (Array.isArray(arr)) {}
	for (i = 0; i < this.length; i++) {
		// arr.forEach(function(elements){
		// 	if (arr.indexOf(this[i])>-1) {
		// 		count++
		// }
		// })
		if (arr.indexOf(this[i])>-1) {
			flag =true
		}

    }
    return flag
=======
>>>>>>> ec1197ded368e7aad2cc2c29d5059a3905f42645

}
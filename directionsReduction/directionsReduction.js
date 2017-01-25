/*
You are lost in Amman and need directions. You talk to a few strangers
and get these directions: go "NORTH", then "SOUTH", then "WEST", then "EAST", then "EAST".

Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too. 
Going to one direction and coming back the opposite direction is a needless effort.

Your task is to look at the directions and eliminate all unnecessary moves.
In this case, you will just go EAST.

Another example:

plan = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].

You can immediatly see that going "NORTH" and then "SOUTH" is not reasonable, 
better stay where you are. So the task is to find a simplified version of the plan. 

A better plan in this case is simply: 
plan = ["WEST"]

You have to write a function dirReduc which will take an array of strings 
and returns an array of strings with the needless directions removed.

More examples:

dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]) => ["WEST"]
dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH"]) => [] //don't need to move at all
*/

var dirReduc = function(directions){
	var Directions = []
	var north =0,south=0,east=0,west = 0;
	for (var i = directions.length - 1; i >= 0; i--) {

		if (directions[i]==='NORTH') {
			north++
		};
		if (directions[i]==='SOUTH') {
			south++
		};
		if (directions[i]==='WEST') {
			west++
		};
		if (directions[i]==='EAST') {
			east++
		};
		// for (var j = directions.length - 1; j >= 0; j--) {
	 //   		// if(i != j && a[i] == a[j]) {
  //  			// }
		// };

		// directions.slice(1).indexOf(directions[i])!==-1 

		};	
		if (north > south) {
			Directions.push("NORTH")
		}
		if (south > north) {
			Directions.push("SOUTH")
		};
		if (east > west) {
			Directions.push("EAST")
		}
		if (west > east) {
			Directions.push("WEST")
		};

	return Directions;
};

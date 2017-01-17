/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4'
// list.tail.value;   //yields '5';

// I know how linked list work but i got lost in how to cod  some parts .!  

var LinkedList = function(){
	this.list={}
	this.list.head = null 
	this.list.tail = null
	// this.size = 0

};
LinkedList.prototype.addToTail = function function_name(value) {
	var node =Node(value)
	if (!this.head) {
		this.head = node
	}else{
		// this.list.tail=node
		this.list.tail.next = node
		// this.list.tail = node
		// this.size++
	 }

}
LinkedList.prototype.removeHead = function function_name() {
	// if (this.head) {

	// }

}
LinkedList.prototype.contains = function function_name(target) {
	// var c = list.head
	// for(var key in this.list){
	// 	if (target === list.head) {
	// 		return true
	// 	}

	// }


}



var Node = function(value) {
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};

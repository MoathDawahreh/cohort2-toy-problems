/**
  * Write a stack using your preferred instantiation pattern. Once you're done,
  * implement a queue using two stacks.
  */

 /**
   * Stack Class
   */
var Stack = function() {
  this.stack=[];
  this.stacksize = 0;

   // add an item to the top of the stack
   this.push = function(value){
    this.stacksize++
    this.stack.push(value)

   };

   // remove an item from the top of the stack
   this.pop = function(){
    if (this.stack.length!==0) {
      var temp = this.stack[this.stack.length-1]
      this.stack = this.stack.slice(0,this.stack.length-1)
      this.stacksize--
      return temp
    }
        return 0
   };

   // return the number of items in the stack
   this.size = function(){
    return this.stacksize
   };
 };

 /**
   * Queue Class
   */
 var Queue = function() {
   // Use two `stack` instances to implement your `queue` Class
   var inbox = new Stack();
   var outbox = new Stack();

   // called to add an item to the `queue`
   this.enqueue = function(value){
    outbox.push(inbox.push(value))
    // this.queue.push(Queue.bind(inbox.push(value)))


    this.queuesize ++
    
   };

   // called to remove an item from the `queue`
   this.dequeue = function(){
    if (this.queuesize!==0) {
       var temp = this.queue[0]
       this.queue = this.queue.slice(0)
       this.count ++
       this.queuesize --
       return  temp


    }
    
   };

   // should return the number of items in the queue
   this.size = function(){

    return this.queuesize
   };
 };

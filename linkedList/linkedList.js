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


var LinkedList = function(){
 this.tail=null;
 this.head=null;

};

//write methods here!

LinkedList.prototype.addToTail=function(value){
 if(this.head === null){
   this.head = value;
   this.tail = this.head;
 }else{
    this.tail = value;
 }

},

LinkedList.prototype.removeHead=function(){
   var x=this.head
    if(this.head !== null){
       this.head=this.head;
    }
    return x;
},


LinkedList.prototype.contains=function(target){
  
}
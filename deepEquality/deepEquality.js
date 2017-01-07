/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */

  var deepEquals = function(obj1, obj2){
    var result=true;
    //my mistake here that when i use nested for the first compare is true but then the value change for the sec obj and still same for the first one 
    //time is up so i cant go more than this sorry
    for(var key1 in obj1){
      for(var key2 in obj2){
          if (obj1[key1]===obj2[key2] && key1===key2) {
            //return true
            result= true && result
          }else{
          //return false
          result = false
          }
        if (typeof key1 ==='object' && typeof key2==='object') {
          deepEquals(key1,key2)
        }
      }
    }
    return result
  }
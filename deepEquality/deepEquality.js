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


  // var deepEquals = function(obj1, obj2){
  //  for(var key in obj1){
  //     for(var key2 in obj2){
  //       if(typeof obj1[key]=== "object" && typeof obj1[key] === "object"){
  //         if(obj1[key][key] === obj2[key2][key2]){
  //           return true;
  //         }else{
  //           return false;
  //         }
  //       }
  //     }
  //   } 
  // }


  var deepEquals = function(obj1, obj2){
    if(JSON.stringify(obj1) === JSON.stringify(obj2)){
      return true;
    }
    return false;
  }


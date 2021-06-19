//------------ Arrays Slice method ----------
var a = ["mango", "guava", "banana", "tomato", "radish"];
var b = a.slice(3, 6); //slice of arry to create new arrays in new variable
/*3 is starting index of arry (tomato)
and 6 is  till index last value (end-value)but not 6th index (0<6)
 */
var c = a.slice(-1); // -1 is last index of arrays (radish)
var d = a.slice(-3); //print -3 index (banana)to last  
console.log(c);
console.log(d);

//------------- arrys Splice method ------------
var i = ["mango", "guava", "banana", "none"];

/*
i.splice(index[2] , how many and (no delete (0)) , "new value")
*/
i.splice(2, 0, "potato", "true"); //splice method modifying current arrays not new arrays


console.log(i);
//----Arrays indexOf  method------
var i = ["mango", "guava", "mango", "banana", "mango"];
console.log(i);
let k = i.indexOf("mango"); //0 index is nd all array not checking 
console.log(k);
var j = i.indexOf("mango", 3); //skip mango index and after mango index checking  and 3 (index)is from where you want
console.log(j);
var l = i.indexOf("mango", 6) // if value is not in arrays output given is (-1)
console.log(l);


//----------------Arrays last-indexOf method--------
var m = ["guava", "mango", "banana", "mango", "carrot"];
console.log(m);
var n = m.lastIndexOf("mango"); //checking index value of last to first (return 2)
console.log(n);
let o = m.lastIndexOf("mango");
console.log(o);
//------------arrays Concat method-----

var x = ["sanjay", "aman", "rehman"];
var y = x.concat("rahul", "naman"); //adding new value i n new arrays
console.log(y);
//-------------

var p = ["sanjay", "aman", "rehman"];
var q = ["rohit", "subham"];
var r = p.concat(q); //adding two arrays in one arrays
console.log(r);
//-------------

var a = ["sanjay", "aman", "rehman"];
var b = ["rohit", "subham"];
var c = ["hey", 34]
var d = a.concat(b, c); //g 3 and more arrays in one arrays
console.log(d);

//------------arrays join method--------------------- 
var m = ["sanjay", "aman", "rehman"];
var n = m.join("  / "); //join all arrays in in new one value(string) and each  between value you will add somethings.
console.log(n);
//modifiy arrays in javascript
var a = [
    ["Rohit", 24, "male", "BCA "],
    ["rakesh", 31, "male", "General"],
    ["raushan", 17, "male", "javascript"]
]
console.log(a);
a[0] = "Rahul"; //modify/replace name of index [0]zero 
console.log(a);
a[0][2] = "female";
/*oth index value is rohit(outer-loop)
and female is inner-loop
 of rohit index is[2]is male to modifiy/replace 
 value to female*/


//----------------Delete value in arrays/multidimensional arrays------------- 

let f = ["golu", 32, "male", "BCA"];
console.log(f);
delete f[2]; //delete the value of index 2 and index 2 is undefined (empty/blank) not delete 
console.log(f);
console.log(f[2]); //output is undefined
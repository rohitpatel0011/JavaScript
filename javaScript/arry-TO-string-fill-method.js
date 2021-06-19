let a = ["rahul", "rohit", "aman", "subham"];
let b = a.toString();
/*The toString() 
method convert 
an array into string and return 
the result*/
let c = a.valueOf();
//valueOf return value of elements in arrays 
console.log(b);
console.log(a);
//--------------
if (Array.isArray(b)) {
    console.log("it is an arrays")
} else {
    console.log("this is not an arrays")
}
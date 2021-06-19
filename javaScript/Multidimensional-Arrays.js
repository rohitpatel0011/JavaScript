/* one arry in multiple array is 
multidimensional array */
//----------------------------------
let ary = [
    ["rohit", 20, "male", "bca"],
    ["sapna", 19, "female", "b.com"],
    ["aman", 21, "male", "mca"]

];
console.log(ary[1]);
for (let a = 0; a <= 2; a++) {
    console.log(ary[a]);
}
for (let a = 0; a <= 2; a++) {
    for (let b = 0; b <= 3; b++) {
        console.log(ary[a][b])
    }
}
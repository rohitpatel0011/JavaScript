//-------Arrays find method-----------

let a = [12, 24, 35, 18, 20];
let b = a.find(adultAge);

function adultAge(age) {
    return age >= 18;
    /*find() method return the value of 
    the each  element( if any one condition is true then pass the test and print that value)
     in an arrays that pass a test*/
}
console.log(b);


//------Arrays find-index------
let x = [12, 24, 35, 18, 20];
let y = a.findIndex(adultAge_);
/*( if one any one condition is true then print the index of these element)*/

function adultAge_(age) {
    return age >= 28;
}
console.log(y);
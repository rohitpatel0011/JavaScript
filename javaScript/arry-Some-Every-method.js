//-------Arrays some method--------
let ages = [22, 24, 35, 127, 20];
let b = ages.some(checkAdult);
/*some method make with function
 to return in test*/

function checkAdult(age_) {
    return age_ >= 200;
    /*or (return x <= 18;)test value in an arrays
     check 1st to last condition .
       if any one condition is true then output is true*/
}
console.log(b);



//----------Arrys Every Method--------
let ages_ = [12, 24, 35, 18, 20];
let i = ages_.every(checkAdult2);

function checkAdult2(age1) {
    return age1 <= 10;
    /*if all arrys in value are  condition is 
       true then output is true*/
}
console.log(i);
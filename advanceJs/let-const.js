 /*======var ====*/
 if (1 == 1){
     var a = "Rohit";

 }
 console.log(a);

//------------
function varTest(){
    var x = 1;
    if (true){
        var x = 2;//same variable
        console.log(x);//2
    }
    console.log(x);//2
    }
varTest();




 /*====let====*/

function letTest(){
let y = 1;
if (true){
    let y = 2;//different variable
    console.log(y);//2
}
console.log(y);//1
}
letTest();


/*=====const=======*/
const n = 24;
// n = 23; given error const is immutable
console.log(n);
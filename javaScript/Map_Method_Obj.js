//----Map method in object----
var a = new Array(2, 43, 34, 35, 23);
var b = a.map(test); //declared new variable [array] with function name
function test(x) {
    return x * 10; //make function to apply all value of arrays and multiply by 10
}
console.log(b);



//-----------map method in arrys of object----
let people = [{
        name: "rohit",
        age: 25,
        city: "kolkata"
    },
    {
        name: "subham",
        age: 20,
        city: "patna"
    },
    {
        name: "mohit",
        age: 22,
        city: "delhi"
    }
];
let people_name = people.map(names);
//people_name += in new arrys

function names(n) {
    return n.name;
}
console.log(people_name);
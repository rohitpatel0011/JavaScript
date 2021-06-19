//--------Arrays of objects------



// let people = [{
//         name: "rohit",
//         age: 25,
//         city: "kolkata"
//     },
//     {
//         name: "subham",
//         age: 20,
//         city: "patna"
//     },
//     {
//         name: "mohit",
//         age: 22,
//         city: "delhi"
//     }
// ];
// for (let a = 0; a < people.length; a++) {
//     console.log(people[a].name + " " + "from" + " " + people[a].city); //people.[a].name target names of arrys of objects
//     //console.log(people[a]) print object/Undefined

// }


// // console.log(people);


function Student(fname, lname, age, city){
    this.firstname = fname,
    this.lastname = lname,
    this.age = age,
    this.city = city

}
var student1 = Student("rohit", "patel", 23, "patna");
console.log(student1.firstname);
var student2 = Student("aman", "verma", 20, "patna")
console.log(student2.lastname);
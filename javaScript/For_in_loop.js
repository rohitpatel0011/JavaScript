//----for in loop is use in Object----
var person = {
    name: "John",
    age: 25,
    place: "London"
};
for (var key in person) {
    console.log(key + ": " + person[key]);
    //key is properties of person 
    //person[key] is properties value of person
}
//------------------Array filter method----------------------

let age = [12, 24, 35, 18, 20];
let b = age.filter(adults)

function adults(x) {
    return x >= 18;
    /*filter checking each and every element
        these conditions is true 
        then output print all selected value*/
}

console.log(b);
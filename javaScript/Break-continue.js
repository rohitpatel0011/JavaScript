//-------------Continue statement------
for (var i = 1; i <= 10; i++) {
    if (i == 5) {
        console.log("five") //number :5 is also print
        continue; /*not ptint 5 replace the value and continue the loop*/
    }
    console.log("number " + ":" + i)
}


//----------------Break statement------

for (let x = 1; x <= 10; x++) {
    if (x == 8) {
        console.log("eight");
        break; //unless x is equal to 8 then break and stop the loop
    }
    console.log("day" + " " + x)

}
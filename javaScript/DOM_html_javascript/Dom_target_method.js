//*---------Target particular element in dom----------

//-------------------------------
var elements = document.body;
console.log(elements);




//-----------------
var element = document.links;
var elem = document.links[2];
//2 is index of link
//.link return length of links in arrays
console.log(element);
console.log(elem);


//---------------
var ele = document.getElementById("header");
//return id name of header all elements 
console.log(ele);


//------------------------------------------------
var el = document.getElementsByClassName("perentdiv");
console.log(el);
console.log(el.length);



//-----------------------------
var elemen = document.getElementsByTagName("input"); //("input")[5];//this or
// console.log(elemen[5]);//this both are same
console.log(elemen);




//*-----Dom Get and Set method--------------------



//*DOM GET METHOD------

//*------.innerText---------
//*-----.innerHTML----------
//*-----.getAttribute-------
//*-----.getAttributeNode---
//*-----Attributes----------

//*----innerText-----
var ement = document.getElementById("paragraph").innerText;
console.log(ement);


//*---innerHTML--------.
var e = document.getElementById("paragraph").innerHTML;
console.log(e);


//*----getAttribute-----
var f = document.getElementById("parent").getAttribute("style");
console.log(f);

var g = document.getElementById("parent").getAttribute("onclick");
console.log(g);


//*-------getAttributeNode--------
var n = document.getElementById("parent").getAttributeNode("style");
console.log(n);


//*---Attributes-----
var p = document.getElementById("parent").attributes;
console.log(p);

var h = document.getElementById("parent").attributes[0];
//[0] index of attributes name 
console.log(h);

var k = document.getElementById("parent").attributes[1].value;
console.log(k);

var l = document.getElementById("parent").attributes[1].name;
console.log(l);
//*---------Target particular element in dom----------

//-------------------------------
var elements = document.body;
console.log(elements);




//-----------------
var element = document.links;
var elem = document.links[2];
//2 is index of link
//.link return length of links in arrays
console.log(element);
console.log(elem);


//---------------
var ele = document.getElementById("header");
//return id name of header all elements 
console.log(ele);


//------------------------------------------------
var el = document.getElementsByClassName("perentdiv");
console.log(el);
console.log(el.length);



//-----------------------------
var elemen = document.getElementsByTagName("input"); //("input")[5];//this or
// console.log(elemen[5]);//this both are same
console.log(elemen);




//*-----Dom Get and Set method--------------------



//*DOM GET METHOD------

//*------.innerText---------
//*-----.innerHTML----------
//*-----.getAttribute-------
//*-----.getAttributeNode---
//*-----Attributes----------

//*----innerText-----
var ement = document.getElementById("paragraph").innerText;
console.log(ement);


//*---innerHTML--------.
var e = document.getElementById("paragraph").innerHTML;
console.log(e);


//*----getAttribute-----
var f = document.getElementById("parent").getAttribute("style");
console.log(f);

var g = document.getElementById("parent").getAttribute("onclick");
console.log(g);


//*-------getAttributeNode--------
var n = document.getElementById("parent").getAttributeNode("style");
console.log(n);


//*---Attributes-----
var p = document.getElementById("parent").attributes;
console.log(p);

var h = document.getElementById("parent").attributes[0];
//[0] index of attributes name 
console.log(h);

var k = document.getElementById("parent").attributes[1].value;
console.log(k);

var l = document.getElementById("parent").attributes[1].name;
console.log(l);





//*--------DOM SET  methods---------- 

//*innerText---
//*---innerHTML-----
//*---setAttribute
//*---attribute-
//*---removeAttribute---------------


//innerHTML-------
var id = document.getElementsByTagName("h1").innerHTML = " <h1>information</h1>";
console.log(id); //change the value of heading tag

// //innerText-------
var d = document.getElementsByTagName("h1").innerText = " <h1>hello</h1>";
console.log(d); //innerText also print tag name 


// //setAttribute-------



var element;
document.getElementById("header").innerHTML = "<h1>rohit</h1>";


//---------Set CSS class name and id name-----------------
var element = document.getElementById("header").setAttribute("class", "new");
console.log(element);
setAttribute("name", "value")

var elem = document.getElementById("nav").setAttribute("class", "and");
console.log(elem); //set new class attribute in nav tag with id name

var element = document.getElementById("nav").getAttributes("class"); //checking value of class attribute
console.log(element);




//*--------DOM SET  methods---------- 

//*innerText---
//*---innerHTML-----
//*---setAttribute
//*---attribute-
//*---removeAttribute---------------


//innerHTML-------
var id = document.getElementsByTagName("h1").innerHTML = " <h1>information</h1>";
console.log(id); //change the value of heading tag

// //innerText-------
var d = document.getElementsByTagName("h1").innerText = " <h1>hello</h1>";
console.log(d); //innerText also print tag name 


// //setAttribute-------



var eleme;
document.getElementById("header").innerHTML = "<h1>rohit</h1>";


//---------Set CSS class name and id name-----------------
var element = document.getElementById("header").setAttribute("class", "new");
console.log(element);
setAttribute("name", "value")

var elem = document.getElementById("nav").setAttribute("class", "and");
console.log(elem); //set new class attribute in nav tag with id name

var element = document.getElementById("nav").getAttributes("class"); //checking value of class attribute
console.log(element);
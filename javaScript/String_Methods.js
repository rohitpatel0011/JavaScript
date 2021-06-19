//-----.length method in string
var str = "Rohit patel"
var a = str.length; //.length method is how many block in whole string include spaces
console.log(a);



//----toLowerCase()function method-----

var str1 = "I am Learning a Javascript Programing Language"
var b = str1.toLowerCase(); //convert all strings to lower case
console.log(b);



//----toUpperCase()function method--------

var str2 = "I am Learning a Javascript Programing Language"
var c = str2.toUpperCase(); //convert all strings to upper case
console.log(c);



//----includes() function method-----

var str3 = "I am Learning a Javascript Programing Language"
var d = str3.includes("Programing");
var e = str3.includes("Java") /*checking/search string in this method is present  return true and checking Case-sensitive*/
var f = str3.includes("programing"); //return false
console.log(d); //true
console.log(f); //false
console.log(e); //true



//------startsWith()function method-----------
var str4 = "I am Learning a Javascript Programing Language"
var g = str4.startsWith("I am"); //checking string in starting not any string.//return true
var h = str4.startsWith("i am"); //checking string in starting not any string //return false
console.log(g);



//-----endsWith()function method-------
var str5 = "I am Learning a Javascript Programing Language"
var i = str5.endsWith("language") //checking last of the string case-sensitive 
var an = str5.endsWith("Pro")
console.log(h);



//-----search()function method-------

var str6 = "this is a javascript"
var j = str6.search("is");
//.search returns the position/index of string
console.log(j);



//-----match()function method-------

let str7 = "hey my name is rohit patel rohit"
var m = str7.match(/rohit/g);
/*search these str and make new arrays (/rohit/g) (g) means global (check whole str)and make new Arrays */
console.log(m);




//-----indexOf()function method-------

let str8 = "this is a javascript"
var n = str8.indexOf("this")
var o = str8.indexOf("th")
var op = str8.indexOf("is")
console.log(n);
console.log(o);
console.log(op);



//-----lastIndexOf()function method-------

let str9 = "this is a javascript and it is highly recommended "
let aa;
aa = str9.lastIndexOf("is");
console.log(aa); /*last index of piche se search karna suru karega aur last se jo milega uska index return karega*/



//-----replace() function method-------

let string_ = "this is javascript"
let strep = string_.replace("javascript", "Programing");
let strep_ = string_.replace(/is/g, "are");
/*jaha jaha is rahega waha waha vale is se are replace ho jayega*/
console.log(strep);
console.log(strep_);
/*existing string ko replace kar dega*/



//-----trim()function method-------

let string1 = "   this is javascript   "
let strng = string1.trim();
//remove spae in string
console.log(string1);
console.log(strng);



//-----charAt()function method-------

let string2 = "this is javascript"
let string2_ = string2.charAt(12)
    //return character index of string
    //count from zero
console.log(string2_);



//-----charCodeAt()function method-------

let string3 = "this is javascript"
let string3_ = string3.charCodeAt(12);
console.log(string3_);
//return ascii code of  character on char-index 2(i) ascii code is 105 


//-----fromCharCode()function method-------

// let string4 = "this is javascript"
// let string4_ = string.fromCharCode(33);
// console.log(string4_);
//return ascii value of character




//-----concat()function method-------

let string5 = "this is javascript"
let string5_ = "and highly recommended language"
let string5__ = " and"
let new_str5 = string5.concat(string5_, string5__);
console.log(new_str5);
/*adding two or more string with concat string method and make new string*/



//------split()function method-------

let string6 = "this is javascript"
let string6_ = string6.split(" ");
/*split(dividing sting ) (" ")= divide these string where space  between space them*/
console.log(string6_);



//------repeat()function method-------

let string7 = "this is javascript"
let string7_ = string7.repeat(3);
console.log(string7_);
//repeat the string (3) means three times



//-----slice()function method-------

let string8 = "this is javascript"
let string8___ = string8.slice(5);
/*slice (5,12) means 5 to 12th ()not include 12th index[>12] index of character 
and make new string*/
let string8__ = string8.slice(-8);
//(8)from behind count from opposite side
let string8_ = string8.slice(5, 12);
console.log(string8___);
console.log(string8__);
console.log(string8_);



//-----substring()function method-------

let string9 = "this is javascript"
let string9_ = string9.substr(1, 3);
/*(1 , 3) 1st index string and 3 character count in new string , same as slice method function*/
console.log(string9_);


//-----toString()function method-------

let string_1 = 23;
let string_1_ = string_1.toString();
//convert the vale in string
console.log(string_1_ + 3);



//-----valueOf()function method-------
let string_2 = "this is javascript"
let string_2_ = string_2.valueOf();
//return value of whole string_2_
console.log(string_2_);
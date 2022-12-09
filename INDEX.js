//1. ways to write in JS
//console.log("Welcome to JS Practice!!!");
//alert("Welcome to JS Practice!!!");
//document.write("This is document write")
//console.warn("This is a warning!!!")
//console.error("This is an error!!")

//2. JS Console Api
console.log("Welcome to JS Practice!!!");
console.warn("This is a warning!!!");
console.error("This is an error!!");

//3. JS Variables

//What are variables? - Containers to store data values.
/*
multi 
line 
comment
 */
var number1 = 30;
var number2 = 70;
console.log(number1 + number2);

//4. Datatypes in JS

//Strings
var str1 = "This is a String";
var str2 = 'This is another string';

//numbers
var number3 = 75;

//objects - key:Value Pairs
var marks ={
    Prasad: 99,
    Mstark: 98,
    Aunta: 97
}
console.log(marks);

//Boolean
var a = true;
var b = false;
console.log(a)

//undefined type
var und = undefined;
console.log(und);

//At a very high level there are two types of data types

//1. Primitive data types: undefined, null, number, string, boolean, symbol
//2. Reference data types: arrays, objects

//Arrays - can be a collection of mixed data-types
//"numbers" or integers are represented in bue/purple color
//"strng" are represented in black color
var arr = [1,2,3,4,5,'Babu']
console.log(arr)

//Operators in JS

//Arithematic Operators
var m = 50;
var n = 49;
console.log("The value of m + n is:", m+n);
console.log("The value of m - n is:", m-n);
console.log("The value of m * n is:", m*n);
console.log("The value of m / n is:", m/n);

//Assignment Operators
var o =2;
//o += 2;
//o -+ 1;
//o *= 3;
//o /=3;
//console.log(o);

//Comparision operators
var x = 98;
var y = 99;
console.log(x == y);
console.log(x >= y);
console.log(x <= y);
console.log(x < y);
console.log(x > y);

//Logical Operators

//logical and operaotr
console.log(true&&true);
console.log(true&&false);
console.log(false&&true);
console.log(false&&false);

//logical or operator
console.log(true||true);
console.log(true||false);
console.log(false||true);
console.log(false||false);

//logical not operator
console.log(!false);
console.log(!true);

//Functions in JS
function avg(k,l){
    j = (k+l)/2;
    return j;
}

a1 = avg(10,100);
a2 = avg(1,10);
console.log(a1,a2);

//If-Else statement in JS
var age = 6;
if(age<18){
    console.log("You can't VOTE !!!");
}
else{
    console.log("You can VOTE !!!");
}

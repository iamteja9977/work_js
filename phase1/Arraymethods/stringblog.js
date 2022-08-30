// //A string can be any text inside double or single quotes
// console.log('Hey this is teja')
// console.log("Hey this is chitra")

// // lets store names in the variables name1,name2
// name1= 'Chitra' 
// name2 = "Teja"
// console.log(name1,name2 )

// //Backticks are generally used when you need to include variables
// // '$' symbol is used before curly brackets

// console.log(`First person  ${name1} likes ; second person ${name2} `)

// let txt = "started with javascript";
// console.log(txt.length)

// ESCAPE CHARACTER 

// let b ="Your , Smart , 2"
// // console.log(b.substr(3,5))
// console.log(str.substr())//entire string
// console.log(b.substr(0))
// //start=0,default end is 'end of the string'
// console.log(b.substr(-0))
// //default prints entire string

// //negative parameters are treated as '0' 
// console.log(b.substr(-1))// YourSmart2
// console.log(b.substr(-2))// YourSmart2

// //this are similar as slice 
// console.log(b.substr(1))//ourSmart2
// console.log(b.substr(0,1))//only 'Y' is printed
// console.log(b.substr(0,9))//YourSmart

// console.log(b.substr(-6,-1))// prints empty string
// console.log(b.substr(-10,-1))//prints empty string

//Default first match AND case sensitive
let text1 = "i'm   alone, are you  alone ? ";
output1= text1.replace("alone", "single");
console.log(output1)

// global match
let text2= "i'm   alone, are you  alone ? ";
output2= text2.replace(/alone/g , "single");
console.log(output2)

//case insensitive
let text3 = "i'm   ALONE, are you  ALONE ? ";
output3= text3.replace(/alone/i, "single");
console.log(output3)

let text4 = "i'm   ALONE, are you  ALONE ? ";
output4= text4.replace(/alone/ig, "single");
console.log(output4)













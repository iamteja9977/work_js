// Post increment
var a=10
console.log(a) 
a++ //here increment as 11
console.log(a++) //'11'  printed first  then increment for the next one 
console.log(a) //12
console.log(a++ +a + a++) 
//          12  13   13
console.log(a + a++ + a++) 
//    updated a=13 and post incremented means a=14
//           14  14    15    becoz post incremented
console.log(a) //g 16 -gets the post incremented value

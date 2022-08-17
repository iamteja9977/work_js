// Post Decrement -Prints and then updates
var a=12
console.log(a)
a-- //here 'a' is decremented to 11
console.log(a--) //11 and  re-decrement for the next one
console.log(a) //10
console.log(a +a-- + a--) 
//          10  10    9    // for the nexrt one a=8
console.log(a-- + a + a--) 
//          8     7    7   // for the next one a=6
console.log(a-- - a) 
//            6   5
console.log(a) //5
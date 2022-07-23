//way1
var a=2,b=3;
var temp;
temp=a; 
a=b;
b=temp;
console.log(a ,b)
console.log('\n')
//way2
// console.log(swap(a,b))
var a=5,b=4;
a=a+b
b=a-b
a=a-b
console.log(a ,b)
console.log('\n')
//way3
var a=6,b=10;
a=a^b
b=a^b
a=a^b
console.log(a ,b)
console.log('\n')
//way4
var a=32,b=12;
[a,b]=[b,a]
console.log(a ,b)
console.log('\n')
//way5
var a=1,b=2;
b=a+(a=b)-b
console.log(a ,b)
console.log('\n')
//
// var a=3,b=4;
// a=b+(b=a)-a
// console.log(a ,b)
// console.log('\n')
//way6
var a=3,b=4;
a=b+(b=a,0)
console.log(a ,b)
console.log('\n')
//
// var a=3,b=4;
// b=a+(a=b,0)
// console.log(a ,b)
// console.log('\n')
//way7
var a=3,b=4;
a=b*(b=a)/b
console.log(a ,b)
console.log('\n')
//
// var a=3,b=4;
// b=a*(a=b)/a
// console.log(a ,b)
// console.log('\n')
//way8
var a=6,b=10;
a=~(a^b)
b=~(a^b)
a=~(a^b)
console.log(a ,b)
console.log('\n')


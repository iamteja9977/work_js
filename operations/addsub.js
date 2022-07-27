
// var a=3,b=4,c=6
// a+=2 // a = a+2 ;a=5
// a = a+2 //; a=7
// b+=4 //b=b+4;4+4=8
// c+=3 // c=c+3;6+3=9
// console.log(b,a,c)


// var a=3,b=4,c=6
// a+=2 // a = a+2;3+2=5
// a = a+b //a=5+4=9
// b+=c //b=4+6=10
// c+=a // c=6+9
// console.log(c,a,b) //15,9,10


// var a=3,b=4,c=6
// a+=b // a=a+b;3+4=7
// a-=2 //a=7-2=5
// b*=c //b=4*6=24
// c-=b // c=6-24=-18
// console.log(b,a,c)

var a=3,b=4,c=6
a+=b-c // a=(a+(b-c)) = 3+(4-6) = 1
b-=b+=c // b = 4-(10);   b = (b+c)=4+6=10 ;  -6
a*=c+a // a = (a*(c+a)) = 1*7 = 7
c-=b-a // c = (c-(b-a)) = 6-(-6-7) = 6-(-13) = 19
console.log(b,a,c)

console.log('\n\n')
e=1,f=3
console.log(e%f)//remainder
console.log(e/f)//quotient
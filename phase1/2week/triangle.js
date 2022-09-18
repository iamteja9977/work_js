
// 3.check if its a triangle first and then Check whether a triangle is a scalene/isosceles/equilateral triangle?
// i) if directly lengths are given,
// ii) Take coordinates as input.

//if given length 
// let a = 6
// let b = 7
// let c = 6

// if ((a+b<=c) && (b+c<=a) && (c+a<=b)){
//     console.log("it is not a triangle")
// }
// else{
//     if (a == b && b == c){
//         console.log("Equilateral Triangle");
//     }
//     else if (a == b || b == c || c == a) {
//         console.log("Isosceles Triangle");
//     }
//     else {
//         console.log("Scalene Triangle");
//     }
// }

    

//if given vertices
// a(a1,a2)
// b(b1,b2)
// c(c1,c2)
var a1=1
var a2=1
var b1=1
var b2=1
var c1=1
var c2=5
ab= Math.sqrt(Math.pow((a1-b1),2)+(Math.pow((a2-b2),2)))
bc=Math.sqrt(Math.pow((b1-c1),2)+(Math.pow((b2-c2),2)))
ca=Math.sqrt(Math.pow((c1-a1),2)+(Math.pow((c2-a2),2)))
console.log(ab)
console.log(bc)
console.log(ca)

if ((ab+bc<=ca) && (bc+ca<=ab) && (ca+ab<=bc)){
    console.log("it is not a triangle")
}
    else{
    if (ab == bc && bc == ca){
        console.log("Equilateral Triangle");
    }
    else if (ab == bc || bc == ca || ca == ab) {
        console.log("Isosceles Triangle");
    }
    //a!=b and b!=c
    else {
        console.log("Scalene Triangle");
    }
}

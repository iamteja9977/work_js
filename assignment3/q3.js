let a = 6
let b = 7
let c = 6

if ((a!=0) || (b!=0) || (c!=0)){
    if (a == b && b == c){
        console.log("Equilateral Triangle");
    }
    else if (a == b || b == c || c == a) {
        console.log("Isosceles Triangle");
    }
    else {
        console.log("Scalene Triangle");
    }
}
else {
    console.log("it is not a triangle")
}
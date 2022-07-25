// var a=4,b=3;
// if(a>b){
// console.log("a is greater than b")//`${a} greater than ${b}`
// }
// else if(a<b){
//     console.log("b is greater then a")//`${b} greater than ${a}`
// }
// else{
//     console.log("both are equal")
// }

var a=30
if ((a % 3)==0 && (a%5)==0){
    console.log("multiple of both 3,5")
}
else if((a % 3)==0){
    console.log("fizz")

}
else if ((a % 5)==0){
    console.log("buzz")
}
// else if ((a % 3)==0 && (a%5)==0){
//     console.log("multiple of both 3,5")
// }
// not a efficient way becoz previous elseif stops
else{
    //((a%3)!=0) && ((a%5)!=0)  condition
    console.log("not a multiple of 3,5")
}


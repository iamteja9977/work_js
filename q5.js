//roots of quadratic equation, nature of roots 
var a=1,b=-3,c=10;
D=(b*b)-4*a*c
//real and equal
if(D==0){
    r1=r2=-b/(2*a);
    //  var r2=r1
    console.log(`root are : ${r1} and ${r2}`);

}
//real and diff
else if(D>0){
r1=(-b+(Math.sqrt(D)))/(2*a)
r2=(-b-(Math.sqrt(D)))/(2*a)
console.log("root1:" +r1)
console.log("root2:" +r2)
}
else if(D<0){
    r=-b/(2*a)
    j=(Math.sqrt(-D))/(2*a)
    console.log(2*a)
    console.log(D)
    console.log(j)

    // r2=(-b-Math.sqrt(D))/(2*a)
    console.log(`root1: ${r} + i ${j}`)
    console.log(`root1: ${r} - i ${j}`)
   
}


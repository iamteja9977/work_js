let operator=1;
// let operator=prompt("enter input:")
var a=1.4,b=30;
console.log("enter 0  for add")
console.log("enter 1  for sub")
console.log("enter 2  for mul")
console.log("enter 3  for div")
console.log("enter 4  for remainder")
console.log("enter 5  for sqrt root")
console.log("enter 6  for expo")
console.log("enter 7  for floor")
console.log("enter 8  for ceil")
switch(operator){


    case 0:
        out=a+b
        console.log(out)
        break;
    case 1:
        out=a-b
        console.log(out)
        break;

    case 2:
        out=a*b
        console.log(out)
        break;
    case 3:
        out=a/b
        console.log(out)
        break;
    case 4:
        out=a%b
        console.log(out)
        break;
    case 5:
        out=Math.sqrt(a)
        console.log(out)
        break;
    case 6:
        out=(a**b)
        console.log(out)
        break;
    case 7:
        out=Math.floor(a)
        console.log(out)
        break;
    case 8:
        out=Math.ceil(a)
        console.log(out)
        break;


        default:
            console.log("improve ur self")
            return;

}

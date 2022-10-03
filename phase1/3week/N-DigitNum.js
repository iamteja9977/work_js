//Confirm whether given number is an 'N' digit number?
var  num = 123;
count=0
while (num != 0) {
   num = Math.round(num/10)
   console.log(num)
  count++;

}
// console.log(count)/
var N=3;
if(N==count){
    console.log("yes count equal to N")
}
else{
    console.log("not equal")
}
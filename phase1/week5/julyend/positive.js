// Write a  program to filter the positive numbers from a list?
//sovling using array data type becoz there is no list data type in js

let numArr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
// using filter method
// getPositives(numArr) method is not working

// output = numArr.filter(num => num > -1)
// console.log(output)


//my code
final=''
for(i=0;i<=numArr.length;i++){
if(numArr[i]>=0){
final=final+numArr[i]+' '
}
else {
    console.log("no positive numbers in array")
}
}
console.log(final)



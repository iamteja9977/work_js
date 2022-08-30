//1.WAP multiplication without using '*'
// A = 12 
// B= 11
// function multiply(A,B){
//     let Result;
//     console.log(A,B);
//     if((A%2)==0){
//         Result = 0;
//     }
//     else{
//         Result = B;
//     }
//     while (A>1){
//         A = Math.floor(A/2)
//         B = B*2;
//         if((A%2)!=0){
//             console.log(A,B);
//             Result += B;
//         }
//         else{
//             console.log(A,B,"*")
//         }
//     }
//     console.log("-----")
//     return Result;
// }
// console.log(multiply(12,11))

//not works when a first operant is even
// function mul(a,b){
//      pro=b
//      console.log(a,b)
//     while(a>1){
//         a=Math.floor(a/2)
//         b=Math.floor(b*2)
//         if(a%2!=0){  //odd numbers
//             pro+=b;
//             console.log(a,b)
//         }
//         else 
//         console.log(a,b,"*")// to represent even numbers

//     }
//     console.log("-----")
//     return pro
// }
// mul(13,12)
// console.log(" ",pro)

//way2
// function multiply(A,B){
// value = A
// for(i=1; i<B;i++){
//     value += A
// }
// console.log(value)
// }
// multiply(12,11)


//// 2. Write a function that pre-pends(adding as pre-fix) a zero to single digit numbers
// function array(){
//     let A = [1,2,45,65,8,9]
//      empty = []
//  for (i=0;i<A.length;i++){
//      let n = '0'
//  if(A[i]<10){
//      n += A[i]
//  empty.push(n)
//  }
//  else{
//      n = ''
//      empty.push(n+A[i])
//  }
//  }
//  console.log(empty)
//  }
//  array()

 ////3. Write an algorithm to Split the Input String into two strings based on even and odd indexes.
//// Left pad with '000' and right pad with '111' to the split string and display the output.
// function string(n){
//   n.split()
//   a = "000"
//   b = "111"
//   c = ""
//   d = ""
//   for (i = 0; i < n.length; i++){
//     if((i%2)==0){
//         c += n[i]
//     }
//     else{
//         d +=n[i]
//     }
//   }
//  console.log(a+c+b)
//  console.log(a+d+b)
// }
// string("Hello There")

//// 4.Split the array and add the first part to the end. 
// There is a given array and split it from a specified position, and move the first part of array add to the end.
// function swap(n){
//     let a =  [1,2,3,4,5,6]
//     b = a.splice(0,n)
//     while(n>0){
//     c = b.shift()
//     //removes the first element from an array and returns that removed element
//     a.push(c)
//     n = n-1
//     }
//     console.log(a)
//     }
//     swap(3)


    ////5. Defang IPv4 and Validate
// function IP(a){
// let b = a.split(".")
// let c = b.join(".")
// flag = true
// for(i=0;i<=b.length-1;i++){
//     if(b[i]<0 && !(b[i]>=255) || b[i]>0 && !(b[i]<=255)){
//         flag = false
//     }
// }
// if(flag){
//     console.log("valid")
// }
// else{
//     console.log("invalid")
// }
// }
// IP("255.255.255.255")

//// 6. Write an algorithm to convert 24 hours format time to 12 hours format time.
function format(a){
b = a.split(":")
// splits a string into an array of substrings, and returns the array
if(b[0]>12){
    d = b[0]-12
    console.log(`${d}:${b[1]} PM`)
}
else{
    console.log(`${b[0]}:${b[1]} AM`)
}
}
format("11:30")



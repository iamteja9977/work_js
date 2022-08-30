// 1. Fibinocci series
//using recursions
// function fibo(n){
//     if(n<2) return n;

//        else {
//         return fibo(n-1)+fibo(n-2)
//        }
// }
// n=20
// for (i=0;i<n;i++){
// console.log(fibo(i))
// }

//2. Armstrong/Narcisstic number or not?
// sum = 0
// n=123
// const   a = String(n).split('');
// const power = a.length; 
// function check(n) {
//     if(n>0){
//         sum += (n%10)**power
//         }
//         else 
//    return sum;
//     return check( Math.floor(n/10))  
// }

// let b = check(n)
// console.log(b)
// if(b==n){
//     console.log("armstrong")
// }
// else{
//     console.log("not a armstrong")
// }


// 3. Sum of the digits of given number?
//   function dig(n){
//     if(n==0)
//     return 0
//     else 
//     return n%10+Math.floor(dig(n/10))
//   }
// console.log(dig(123))

// 4. Given an array of positive integer elements. 
// Print out the count of Prime Numbers and Narcissistic numbers from the array and remove those elements from the array.
// Example:
// Input 1 : [10, 20, 30, 40, 2, 5, 7, 153, 1024, 1634, 11]
// Prime Numbers Count : 4
// Narcissistic Numbers Count : 5
// The updated array : [ 10, 20, 30, 40, 1024 ]
arr=[10, 20, 30, 40, 2, 5, 7, 153, 1024, 1634, 11]

//gives the sorted array in ascending order
result=arr.sort(function(a,b){
return a-b })
console.log(result)
// console.log(result[8])

function prime(result){
for(i=0;i<result.length;i++){
 let flag=true;
count=0
 if (result[i] > 1) {
    for (let i = 2; i < result[i]; i++) {
        if (result[i] % i == 0) 
        {//not to be multiple of any number
            flag = false;
            break;
        }
        count++
    }
   
  }
}
return count;
}
pc=prime(result)
console.log("prime count :" +pc)


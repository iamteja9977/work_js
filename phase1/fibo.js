// fibinocci series
// function fibo(n){
//     let n1 = 0, n2 = 1, sum=0;
//     // s=''
//     output=''
// for (let i = 1; i <= n; i++) {
//     // console.log(n1);   //it will print line by line way1
//     output+=`${n1} `   //way3
//     // s.concat(console.log(n1))   //line by line way2
//     sum = n1 + n2;
//     n1 = n2;
//     n2 = sum;
// }
// console.log(output)
// }
// fibo(8)


//using recursions
// function fibo(n){
//     if(n<2) return n;

//        else {
//         return fibo(n-1)+fibo(n-2)
//        }
// }
// n=2
// for (i=0;i<n;i++){
// console.log(fibo(i))
// }


//armstrong number
// function arm(){
//     let n='153'
//     sum=0
//     for(i=0;i<n.length;i++){

//     temp=Math.pow(n[i],n.length)
//     sum+=temp
//     }
//     console.log(sum)
//     if(sum==n){
//         console.log(" its a armstrong number")
//     }
//     else{
//         console.log(" its not  an armstrong number")
//     }
// }
// arm()

// by sir 
// function arm(){
//     let n='123'
//     len=(''+ n).length
//     sum=0
//     temp=n;
//     while(n>0){
//         sum +=(n%10) ** len
//         n=(n/10)-(n/10)%1// its just a floor function doing manually
        // (123/10)-(123/10)%1
        //12.3-(12.3)%1
        //12.3-0.3
        //12
        // Note:console.log(n%10)=n
//     }

//     if(sum==temp){
//         console.log(" its a armstrong number")
//     }
//     else{
//         console.log(" its not  an armstrong number")
//     }
// }
// arm()




//sum of integer using recursion
// function s(n){
//     if(n>0)
//     return n+s(n-1)
//     else 
//     return n
    
//   }
//   console.log(s(3))
  
  //sum of digits of integer
//   function dig(n){
//     if(n==0)
//     return 0
//     else 
//     return n%10+Math.floor(dig(n/10))
//   }
// console.log(dig(123))

//2 table
// function tab(n,i){
//     if(i==11)
//     return 0
//     else{
//     console.log(`${n} * ${i} = ${n*i} `)
//     return tab(n,i+1)
//     }
// }
// tab(2,1)


//multiple table
//way1
// function tab(n,i){
//     if(i==11)
//     {return} 
//     // else{
//     console.log(`${n} * ${i} = ${n*i} `)
//     return tab(n,i+1)
    
//     // }
// }
// for(j=2;j<=5;j++){
// tab(j,1)
// }

//way2
// function tab(n){
//     if(n==11)
//     {return} 
//     for(i=1;i<=10;i++){
//     console.log(`${n} * ${i} = ${n*i} `)
//         }
//         return tab(n+1)
//     }
// tab(5)


// print 1-10
function ten(n){
    if(n==11)
    return 0
    else{
      console.log(n)
    return ten(n+1)
    }
}
ten(1)


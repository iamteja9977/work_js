// fibinocci series
function fibo(n){
    let n1 = 0, n2 = 1, sum=0;
    // s=''
    output=''
for (let i = 1; i <= n; i++) {
    // console.log(n1);   //it will print line by line way1
    output+=`${n1} `   //way3
    // s.concat(console.log(n1))   //line by line way2
    sum = n1 + n2;
    n1 = n2;
    n2 = sum;
}
console.log(output)
}
fibo(8)
// export default fibo


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


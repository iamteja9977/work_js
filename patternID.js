//increment pattern
// r1-*      
// r2-**      
// r3-***
// r4-****
// r5-*****
// using single for loop
// n=5
// s=''
// for(i=1;i<=5;i++){
//   s=s+'*'
//   console.log(s)
// }



// using double for loop
// n=5//no.of rows
// s=''
// for(i=1;i<=n;i++){
//   for(j=1;j<=i;j++)
//   {
//     s+='*'
//   }
//   s+='\n'
// }
// console.log(s)

//decreasing pattern
// * * * * *
// * * * *
// * * * 
// * *
// *

//using single loop
// s=''
// for(i=5;i>=1;i++){
//   s=s+'*'
 
// }
// console.log(s)

//using single forloop with substring
// s='* * * * *'
// for(let i=s.length;i>=1;i-=1){//
//   console.log(s.substring(0,i))
// }


// using double for loop
// n=5//no.of rows
// s='' 
// for(i=1;i<=n;i++){     //i=5;i>=1;i--
//   for(j=i;j<=n;j++)    //j=i;j>=1;j--
//   {
//     s+='* '
//   }
//   s+='\n'
// }
// console.log(s)

// n=5//no.of rows
 //by sir
//  s=''// empty string
// for(i=5;i>=1;i--){   
//   s=''  //reset string
//   for(j=i;j>=1;j--)    //
//   {
//     s+='* '
//   }
//   console.log(s)
// }

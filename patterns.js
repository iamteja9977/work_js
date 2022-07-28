// a="code"
// s=''
// for(i=1;i<=(a.length-1);i++){

//     // s=s+a[i]+'**'  //method1
//     s=s+'**'+a[i]    //method2
//   }
// // console.log(s)
// // Q=s.slice(s[1],s.length-2)
// //   console.log(Q)
// console.log(a[0]+s)




// start=1,end=5
// s=''
// for(i=start;i<=end;i++){
//     // s=s+i//12345
//     // s=s+' '+i// 1 2 3 4 5
//     s=s+i+' '//1 2 3 4 5
// }
// console.log(s) // 

// *
// **
// ***
// ****
// *****
// n=5
// s=''
// for(i=1;i<=n;i++){
//   for(j=0;j<i;j++)
//   {
//     s+='*'
//   }
//   s+='\n'
// }
// console.log(s)

//to print
// 1
// 12
// 123
// 1234
// 12345
n=5
s=''
for(i=1;i<=n;i++){
  for(j=1;j<=i;j++)
  {
    s+=j    // if want s+=i
                        //  1
                        //  22
                        //  333
                        //  4444
                        //  55555
  }
  s+='\n'
  
  // console.log('\n')
}
console.log(s)



 
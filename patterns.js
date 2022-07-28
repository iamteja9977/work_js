//Q2
// empty decreasing +'*' increasing

//     *
//    **
//   ***
//  ****
// ***** 
//using multiple for loop
// n=5//no.of rows
// s=''
// for(i=1;i<=n;i++){
//   for(j=i;j<=n;j++)
//   {
//     s+=' '
//   }
//   for(j=1;j<=i;j++)
//   {
//   s+='*'
//   }
//   s+='\n'
// }
// console.log(s)


//Q3
//decreasing space ,increasing star,increasing star
// n=5//no.of rows
// s=''
// for(i=1;i<=n;i++){
//   for(j=i;j<=n;j++)
//   {
//     s+=' '
//   }
//   for(j=1;j<i;j++)
//   {
//   s+='*'
//   }
// for(j=1;j<=i;j++)
//   {
//   s+='*'
//   }
//   s+='\n'
// }
// console.log(s)

//Q4
//increasing space,decreasing star ,decreasing star
n=5//no.of rows
s=''
for(i=1;i<=n;i++){
  for(j=1;j<=i;j++)
  {
    s+=' '
  }
  for(j=i;j<n;j++)
  {
  s+='*'
  }
for(j=i;j<=n;j++)
  {
  s+='*'
  }
  s+='\n'
}
console.log(s)

//............................................................................................

//Q5
// using single for loop
// 1
// 11
// 111
// 1111
// 11111
// n=5
// s=''
// for(i=1;i<=5;i++){
//   s=s+1
//   console.log(s)
// }
//.....................................................

//Q6
//to print
// 1
// 12
// 123
// 1234
// 12345
// ......
// 12345678

// using single for loop
// n=8
// s=''
// for(i=1;i<=n;i++){
//   s=s+i
//   console.log(s)
// }

// using double for loop
// n=8
// s=''
// for(i=1;i<=n;i++){
//   for(j=1;j<=i;j++)
//   {
//     s+=j    
//     // if want s+=i   for to print   1
//                                 //   22
//                                 //   333
//                                 //   4444
//                                 //   55555
//                                 //   666666
//                                 //   7777777
//                                 //   88888888                  
//   }
//   s+='\n'
// }
// console.log(s)


//Q8
// 2  9
// 3  8
// 4  7
// 5  6
// 6  5
// 7  4
// 8  3
// 9  2
// 10 1

//.........................
 
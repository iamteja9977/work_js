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
//   for(j=i;j<n;j++)
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


//to avoid new line 
// a='';
// let spaces = 4;
// for(let i=1; i<=spaces+1; i++){
//     for(let j=spaces; j>=i; j--){
//        a= a+' ';
//     }
//     for(let k=1;k<=i;k++){
//         a = a + "*"
//     }
//     console.log(a);
//     a='';
// }


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

//by sir
// star = ''
// for (var i=1; i<=5;i++){
//     space = ''

//     for (var j=1; j<=5-i; j++){
//         space+=' ' 
//     }
//     star += '* '

//     console.log(space,star)
// }

//ADDITONAL
//to print
//   A
//  AAA
// AAAAA
// n=3//no.of rows
// s=''
// for(i=1;i<=n;i++){
//   for(j=i;j<=n;j++)
//   {
//     s+=' '
//   }
//   for(j=1;j<i;j++)
//   {
//   s+='A'
//   }
// for(j=1;j<=i;j++)
//   {
//   s+='A'
//   }
//   s+='\n'
// }
// console.log(s)

//Q4
//increasing space,decreasing star ,decreasing star
// n=5//no.of rows
// s=''
// for(i=1;i<=n;i++){
//   for(j=1;j<=i;j++)
//   {
//     s+=' '
//   }
//   for(j=i;j<n;j++)
//   {
//   s+='*'
//   }
// for(j=i;j<=n;j++)
//   {
//   s+='*'
//   }
//   s+='\n'
// }
// console.log(s)



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


// console.log('\n')

//using two for loops
// s=''
// for(i=1;i<=5;i++){
// for(j=i;j<=i;j++) { 
// s=s+1
// console.log(s)
// }
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
// n=5
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
           
//   }
//   s+='\n'
// }
// console.log(s)


//Q7
// 2  9
// 3  8
// 4  7
// 5  6
// 6  5
// 7  4
// 8  3
// 9  2
// 10 1
// n=10
// s=11
// for(i=2;i<=10;i++){
//   console.log(`${i}   ${s-i} `)
// }


// Q9  
//                                   1
                                //   22
                                //   333
                                //   4444
                                //   55555

// using double for loop
// n=5
// s=''
// for(i=1;i<=n;i++){
//   for(j=1;j<=i;j++)
//   {
//     s+=i
           
//   }
//   s+='\n'
// }
// console.log(s)


//Q10
// 54321
// 4321
// 321
// 21
// 1
// using double for loop
// n=5//no.of rows
// s='' 
// for(i=5;i>=1;i--){     //i=5;i>=1;i--
//   for(j=i;j>=1;j--)    //j=i;j>=1;j--
//   {
//     s+=j
//   }
//   s+='\n'
// }
// console.log(s)

//Q11

// n=5//no.of rows
// s=''
// count=1
// for(i=1;i<=n;i++){
//         if(i<=4){
//            for(j=1;j<=i;j++)
//           {
//             s+=count+"  "
//             count++
//           }  
//          s+='\n'
//         }
//     else{
//         for(j=1;j<=i;j++)
//         {
//           s+=count+" "
//           count++
//         }
//         s+='\n'   
//         }
// }
// console.log(s)

//Q12

// n=5//no.of rows
// s=''
// count=1
// for(i=1;i<=n;i++){
//         if(i<=2){
//            for(j=i;j<=n;j++)
//           {
//             s+=count+"  "
//             count++
//           }  
//          s+='\n'
//         }
//     else{
//         for(j=i;j<=n;j++)
//         {
//           s+=count+" "
//           count++
//         }
//         s+='\n'   
//         }
// }
// console.log(s)

//Q13
// not working 
// n=10
// s=''
// count=1
// for(i=1;i<=n;i++){
//         if(i<=4){
//            for(j=1;j<=i;j++)
//           {
//             s+=count+"  "
//             count++
//           }  
//          s+='\n'
//         }
//     else{
//         for(j=1;j<=i;j++)
//         {
//           s+=count+" "
//           count++
//         }
//         s+='\n'   
//         }
// }
// console.log(s)

n=10
for(i=1;i<=n;i++){
  s=''
  for(j=1;j<=i;j++)
  {
    s=s+(i*j)+" "
  }
console.log(s)
}

//Q14
// // not working fine
// let n = 5; // height of pattern
// let string = "";
// let count = 1;
// // External loop
// for (let i = 1; i <= n; i++) {
// //   Internal loop
//   if(i<=4){
//      for(j=i; j<10; j++)
//      {
//         string +=' '
//       }
//      for (let j = 1; j <= i; j++) {
//        string +=count+ '';
//        count++;
//        }
//      }
//    else{
//         for(j=i; j<n; j++)
//         {
//            string +=''
//          }
//         for (let j = 1; j <= i; j++) {
//           string +=count+'';
//           count++;
//           }
//    }
//   string += "\n";
// }
// console.log(string);


//Q15
// let n = 5; 
// let s= "";
// // External loop
// for (let i = 1; i <= n; i++) {
//   // printing characters
//   for (let j = 0; j< i; j++) {
//     s+= String.fromCharCode(j + 65);
//     // to convert the number to a letter.
//     //ASCII OF A=65,Z=90
//   }
//   s += "\n";
// }
// console.log(s);

//Q16

// n=3//no.of rows
// s=''
// for(i=1;i<=n;i++){
//   for(j=0;j<n-i;j++)
//   {
//     s+=' '
//   }
//   for(j=0;j< (2*i-1);j++)
//    {
//    s+=String.fromCharCode(j + 65)
//    }
//   s+='\n'
// }
// console.log(s)


//Q17
// n=5
// s=''
// for(i=1;i<=5;i++){
//   s=s+'A '
//   console.log(s)
// }
//.........................
 
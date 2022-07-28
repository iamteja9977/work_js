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
n=5//no.of rows
s=''
for(i=1;i<=n;i++){
  for(j=1;j<=i;j++)
  {
    s+='*'
  }
  s+='\n'
}
console.log(s)

//decreasing pattern
// * * * * *
// * * * *
// * * * 
// * *
// *

//using single forloop with substring
// s='*****'
// for(let i=s.length;i>=1;i--){//
//   console.log(s.substring(0,i))
// }


// using double for loop
n=5//no.of rows
s='' 
for(i=1;i<=n;i++){
  for(j=i;j<=n;j++)
  {
    s+='*'
  }
  s+='\n'
}
console.log(s)
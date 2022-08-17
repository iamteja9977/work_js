//string to separate characters with "**"
a="code"
s=''
for(i=1;i<=(a.length-1);i++){

    s=s+a[i]+'**'  
  }
console.log(s)//o**d**e

//to add 'c' in starting
a="code"
s=''
for(i=1;i<=(a.length-1);i++){
    s=s+'**'+a[i] 
}
console.log(a[0]+s)//c**o**d**e
//
// Q=s.slice(s[1],s.length-2)
//   console.log(Q)

//automate 
start=1,end=5
s=''
for(i=start;i<=end;i++){
    // s=s+i//12345

    // s=s+' '+i// 1 2 3 4 5 spece at the start also to remove it we keep space in  b/w

    s=s+i+' '//1 2 3 4 5
}
console.log(s) // 
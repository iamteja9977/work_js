a=[1,2,4,6,3,7,9,8]
a=a.sort()
console.log(a)
s=0
e=(a.length-1)

let x=7
function binary(a,x,s,e){
 
  let  m=Math.floor((s+e)/2)
if(a[m]===x)
return m;

else if(a[m]>x){
    return binary(a,x,s,m-1)
}
else{
    return binary(a,x,m+1,e)
}
}

console.log(binary(a,x,s,e))
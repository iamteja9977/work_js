a=[1,2,3,4,5,6,7,8]
// console.log(a.includes(2));

for(i=0;i<a.length;i++){
    let b=2
    if(a[i]==b){
        console.log('found')
    }
   
}


flag=true
for(i=0;i<a.length;i++){
    let b=2
    if(a[i]==b){
        flag=false//changed means found
        break;//save execution time
    } 
}
if(flag){
    console.log("number exists")
}
else{
    console.log("number  doesn't exists")
}
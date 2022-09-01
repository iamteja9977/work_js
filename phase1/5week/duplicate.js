// WAP to remove duplicates from the given array?
// Ex: input: [2,21,-5.6,21,89,43,-5,09,2,34,43]
    //    output:  [2,21,-5.6,89,34,-5,09,43]
    
//    a=[2,21,-5.6,21,89,43,-5,09,2,34,43] 
// function dup(a){
//     temp=[]
//     for(i=0;i<=a.length;i++){
//         //returns -1 if the value is not found
//         if(temp.indexOf(a[i])=== -1){
//             temp.push(a[i])
//         }
//     }
//     console.log(temp)
// }
// dup(a)

arr=[2,21,-5.6,21,89,43,-5,09,2,34,43] 
function dup(a){
    temp=[]
    obj={}
    for(i=0;i<=a.length;i++){
        obj[a[i]]=0;
    }
    for(a in obj){
        temp.push(a)
    }
    console.log(temp)    
 
}
dup(arr)
// console.log(dup(arr))
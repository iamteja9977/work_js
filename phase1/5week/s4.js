// WAP to delete all the positive numbers from the arr
   //Note : Do not create separate Array, Remove the positive elements from the existing array.
//    input: [2,-1,-5.6,4,89,43,-35,09]
//           output: [-1,-5.6,-35]
// a= [2,-1,-5.6,4,89,43,-35,09]
// function arr(a){
// temp=[]
//     for(i=0;i<=(a.length);i++){
//               if((a[i])<0)
//               {
//                 temp.push(a[i])
//               }
             
//      }
//      console.log(temp)

// }
// arr(a)


//without separate array
// a= [2,-1,-5.6,4,89,43,-35,09]
// function arr(a){
//     for(i=0;i<=(a.length);i++){
//               if((a[i])<0)
//               {
//                a= a.push(a[i])
//               }
             
//      }
//      console.log(a)

// }
// arr(a)

//using length and sort method
a= [2,-1,-5.6,4,89,43,-35,09]
a.sort();
count=0
for(i=0;i<=a.length;i++){
if(a[i]<0){
    count++
}
}
a.length=count
console.log(a)


// const months = [1,2,14,-3,-2,-1,-11];
// months.sort();
// months.length=3
// console.log(months);



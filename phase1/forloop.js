//print 1 to 5
// for(i=1;i<=5;i++){
//     console.log(i)
// }

//print 10 to 5
// for(i=10;i>=5;i--){
//     console.log(i)
// }
//internal process
//iteration 0; 10;i=10
//iteration 1; 9;i=9
//iteration 2; 8;i=8
//iteration 3; 7;i=7
//iteration 4; 6;i=6
//iteration 5; 5;i=5

// //even b/w 50-100
// for(i=50;i<=100;i++){//or i+=2
//     if(i%2==0){
//     console.log(i)
//     }
// }


//odd b/w 50-100
// for(i=51;i<=100;i--){//or i+=2
//     if(i%2!=0){
//     console.log(i)
//     }
// }


//print 10 table
// for(i=1;i<=10;i++){
//     console.log(`10 X ${i} = ${i*10}`)
// }

// print  each character of string

// a="ABC"
// for(i=0;i<=(a.length-1);i++){
//     console.log(a[i]) 
// }

// //print even character of string
// a="ABCdefg"
// for(i=1;i<=(a.length-1);i+=2){//i=0 for odd
//     console.log(a[i]) 
// }


//using for loop print table automate or 2-5
var start=2
var end=5
// replace start=2 and end=5
//this is to automate
for (i= start; i <= end; i++) {
    console.log(`\n`)
    console.log(`...${i} table ......`)
   for (j = 1; j <= 10; j++) {
   console.log(`${i} * ${j} = ${i*j}`);
   }
   
}

//on array

// a=['a','v','e','r']
// for(i=1;i<=(a.length-1);i++){
//     console.log(a[i])
// }

// //obj
// a={1:'a',2:'b',3:'c',4:'d'}
// // console.log(Object.keys(a))
// x=Object.values(a)
// y=Object.keys(a)
// for(i=0;i<=(x.length-1);i++){
//     console.log(`${y[i]}: '${x[i]}' `)  
// }

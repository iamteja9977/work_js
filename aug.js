// for(i=1;i<=10;i++){
//     if(i==5){
//     // break;
//     continue;
//     }
//     console.log(i)
// }


//  let i=1
// while(i<=10){
//     if(i==5){
//         break;
//     }
//     console.log(i)
//     i++
// }

// let i=1
// while(i<=10){
//     // console.log(i) //it also prints '5'
//     if(i==5){
//         i++
//     continue;
   
//     }
//     console.log(i)
//     i++
// }

// function add(a,b){
//     sum=a+b
//     console.log(sum)
// }
// add(2,3)
// add(4,5)//multiple  callback are accepted


// function even(a){
//     for(i=1;i<= a;i++){
//     if((i%2)==0){
//     console.log(i, " is even" )
    
//     }
// }
// }
// even(15)


//other way
// function test(a){
//     return a;
// }
// console.log(test(2))


// function test(a){
//     return a;
//     console.log(2)//default commented ntg will print after return 
// }
// c=test(2)//storing possible only with 'return'
// console.log(c)

//  lar=0
// function bonus(){
// // console.log(Math.max(a))
// for(i=0;i<=a.length;i++){
//    if( a[i]>lar ){
//     lar=a[i]
//     // return lar;
//    }
// }
// console.log(lar)
// }
// a=[2,150,3,4,300,50000,500]
// bonus()
 

// way2
a=[2,150,3,4,300,50000,500]
temp=a[0]
function max(a){
    //cross check
    // console.log(a[i]>temp)
    for(i=1;i<=(a.length-1);i++){
        if(a[i]>temp){
            temp=a[i]
        }
    }
    console.log(temp)
}
max(a)



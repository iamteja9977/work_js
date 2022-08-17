//WAP print 2 table by sir 
// i=1
// while(i<=10){
//     console.log(`2 X ${i} = ${i*2}`)
//     i++
// }

//my method
// i=1
// c=0
// while(i<=20){
//    if((i%2==0)){
//     c++
//     console.log(`2 * ${c}= ${i} `)
//    }
// i++
//    }

   //bonus question
   //table of 2,3,4,5 continuously
// using while loop  pre-increment
// table=1;
// while(table<5){
//    table++;
//    i=0;
//    while(i<10){
//       i++
//       console.log(table + " * " + (i) + " = " + (table * (i))); 
//    }
//    console.log("----------");
// }

// using while loop  post-increment
table=2;
while(table<=5){
   i=1;
   while(i<=10){
    //   i++
      console.log(table + " * " + (i) + " = " + (table * (i))); 
      i++
   }
   table++;
   console.log("----------");
}


//using for loop

// for (var table = 2; table <= 5; table++) {
//    for (var i = 1; i <= 10; i++) {
//    console.log(table + " * " + (i) + " = " + (table * (i)));
//    }
//    console.log("----------");
// }






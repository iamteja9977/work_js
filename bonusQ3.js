//find the grestest number among three numbers
// var a=12,b=10,c=10;
// if (a==b && b==c && c==a)
// {
//     console.log(`a,b,c are equal`)
// }
// else if((a==b) && a>c){
//     console.log(`a,b are equal and ${c} lesser than them`)
//     }
// else if((b==c) && b>a){
//         console.log(`b,c are equal and ${a} lesser than them`)
//         }
// else if((a==c) && a>b){
//             console.log(`a,c are equal and ${b} lesser than them`)
//             }

// else if(a>b && a>c){
// console.log(`${a} greater than ${b},${c}`)
// }
// else if(b>c && b>a){
//     console.log(` ${b} greater than ${a},${c}`)
// }
// else{
//     console.log(`${c} greater than ${a},${b}`)
// }

//same question
//using nested 
var a=1111,b=123,c=14;
if (a==b || b==c || c==a)
{    if (a==b && b==c && c==a){
    console.log(`a,b,c are equal`)
      }
    else if((a==b) && a>c){
       console.log(`a,b are equal and ${c} lesser than them`)
       }
   else if((b==c) && b>a){
        console.log(`b,c are equal and ${a} lesser than them`)
        }
   else if((a==c) && a>b){
            console.log(`a,c are equal and ${b} lesser than them`)
            }
 
}
else{
    if(a>b && a>c){
    console.log(`${a} greater than ${b},${c}`)
    }
   else if(b>c && b>a){
    console.log(` ${b} greater than ${a},${c}`)
   }
  else{
    console.log(`${c} greater than ${a},${b}`)
   }
}  
 


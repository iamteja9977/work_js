//print from 0-9
// i=0
// function f(){
//     if(i==10){
//         return;
//     }
//     else{
//         console.log(i)
//         return f(i++)
//     }
// }f()

//multiples of 3 from 50-150
i=50
function f(){
    if(i==151){
        return
    }
    else{
        if(i%3==0){
            console.log(i)
        }   
        return f(i++)
    }
}f()

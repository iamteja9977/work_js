// function f(x,y){
//   if(x==0) return y;
//   return f(x-1,x+y)
// }
// console.log(f(5,6))

//default parameter
// function f(x,y=6){
//   if(x==0) return y;
//   return f(x-1,x+y)
// }
// console.log(f(5))

//becoz default parameter must be at the end
// function f(x=5,y){
//   if(x==0) return y;
//   return f(x-1,x+y)
// }
// console.log(f( , 6))


//MIN_VALUE is 5e-324 , i.e. the smallest positive number that can be represented within float precision, 
// i.e. that's as close as you can get to zero. It defines the best resolution floats give you.
//  Now the overall smallest value is Number.
// function f(n){
//   if (n==0) return;
//   // else{
//   console.log(n%2)
//   f(n/2)
//   // }
// }
// console.log(f(25))


//core logic of decimal to binary  
// 10011 reverse it
// function f(n){
//   s=''
//   if (n==0) return;
//   else{
//     s+=(n%2)
//   console.log(s)
//   f(Math.floor(n/2))
//   }
// }
// console.log(f(25))

//q1
// function f(x,y){
//   if(y==0) return 0;
//   return (x+f(x,y-1))
// }
// console.log(f(2,5))
//x*y- gene

//q2
// function f(x,y){
//   if(y==0) return 0;
//   return (x+f(x,y-1))
// }
// function f2(a,b){
//   if(b==0) return 1;
//   return f(a,f2(a,b-1))
// }
// console.log(f2(2,3))
//x**y


//q3
// function f(n){
//   if(n==0 || n==1) return n;
//   if(n%3!=0) return 0;
//    return  f(n/3)
// }
// console.log(f(3))
//gives o/p 1 is its the power of 3,else 0



//q4
// robot function question
// function robot(n,a,b){
//   if(n<=0) {
//     return;
//   }
//   robot(n-1,b,b+n) //1st
//   console.log(n,a,b)
//   robot(n-1,b,a+n)  //2nd
// }
// robot(2,5,2)

// 1 2 4   o/p of 1st
// 2 5 2   o/p of default 
// 1 2 7   o/p of 2nd


// q5
// function count(n){
//   var d=1
//   console.log(n)
//   console.log(d)
//   d++;
//   if(n>1){
//     count(n-1)
//   }
//   console.log(d)
// }
// count(3)





//factorial
// function f(n){
//   if(n<=1) return 1;  // more efficient
//   // if(n==0)
//   //  return 1;
//   //  else if(n==1)
//   //  return 1;
//    else
//    return n*f(n-1)
//  }
//  console.log(f(0))

//for handling -ve number also
// num=-2
// if(num<0){
//   console.log("num is -ve")
// }
// else if(num==0){
//   console.log("0!=1")
// }
// else{
// console.log(f(num))
// }

// function f(n){
//   if(n==1 )
//    return n;
//    else
//    return n*f(n-1)
//  }




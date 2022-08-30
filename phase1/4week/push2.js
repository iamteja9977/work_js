//assignment3
//Q1
// n=5//no.of rows
//  s=''// empty string
// for(i=5;i>=1;i--){   
//   s=''  //reset string
//   for(j=i;j>=1;j--)    //
//   {
//     s+='* '
//   }
//   console.log(s)
// }

//Q2
// a='';
// let spaces = 4;
// for(let i=1; i<=spaces+1; i++){
//     for(let j=spaces; j>=i; j--){
//        a= a+' ';
//     }
//     for(let k=1;k<=i;k++){
//         a = a + "*"
//     }
//     console.log(a);
//   a='';
// }

//Q3
//decreasing space ,increasing star,increasing star
// n=5//no.of rows
// s=''
// for(i=1;i<=n;i++){
//   for(j=i;j<=n;j++)
//   {
//     s+=' '
//   }
//   for(j=1;j<i;j++)
//   {
//   s+='*'
//   }
// for(j=1;j<=i;j++)
//   {
//   s+='*'
//   }
//   s+='\n'
// }
// console.log(s)

//Q4
//increasing space,decreasing star ,decreasing star
// n=5//no.of rows
// s=''
// for(i=1;i<=n;i++){
//   for(j=1;j<=i;j++)
//   {
//     s+=' '
//   }
//   for(j=i;j<n;j++)
//   {
//   s+='*'
//   }
// for(j=i;j<=n;j++)
//   {
//   s+='*'
//   }
//   s+='\n'
// }
// console.log(s)

//Q5
//using single loop
// n=5
// s=''
// for(i=1;i<=5;i++){
//   s=s+1
//   console.log(s)
// }

//using two for loops
// s=''
// for(i=1;i<=5;i++){
// for(j=i;j<=i;j++) { 
// s=s+1
// console.log(s)
// }
// }

//Q6
// using single for loop
// n=8
// s=''
// for(i=1;i<=n;i++){
//   s=s+i
//   console.log(s)
// }

// using double for loop
// n=8
// s=''
// for(i=1;i<=n;i++){
//   for(j=1;j<=i;j++)
//   {
//     s+=j 
           
//   }
//   s+='\n'
// }
// console.log(s)

// Q7
// n=10
// s=11
// for(i=2;i<=10;i++){
//   console.log(`${i}   ${s-i} `)
// }

//Q8
// a = ''
// b = ''
// for (i = 9; i >= 2; i--) {
//     a = ''
//     b=''

//     for (j = 9; j >= i; j--) {
//         a = a + j
    
//     } for (k = 2; k <= i; k++){
//         b = b + ' '
//     }console.log(`${a} * 9 + ${i-2}${b}= ${a*9+i-2}`)
// }

//Q9
// using double for loop
// n=5
// s=''
// for(i=1;i<=n;i++){
//   for(j=1;j<=i;j++)
//   {
//     s+=i
           
//   }
//   s+='\n'
// }
// console.log(s)

//Q10
// using double for loop
// n=5//no.of rows
// s='' 
// for(i=5;i>=1;i--){     //i=5;i>=1;i--
//   for(j=i;j>=1;j--)    //j=i;j>=1;j--
//   {
//     s+=j
//   }
//   s+='\n'
// }
// console.log(s)

//Q11
// n=5//no.of rows
// s=''
// count=1
// for(i=1;i<=n;i++){
//         if(i<=4){
//            for(j=1;j<=i;j++)
//           {
//             s+=count+"  "
//             count++
//           }  
//          s+='\n'
//         }
//     else{
//         for(j=1;j<=i;j++)
//         {
//           s+=count+" "
//           count++
//         }
//         s+='\n'   
//         }
// }
// console.log(s)

//Q12
// n=5//no.of rows
// s=''
// count=1
// for(i=1;i<=n;i++){
//         if(i<=2){
//            for(j=i;j<=n;j++)
//           {
//             s+=count+"  "
//             count++
//           }  
//          s+='\n'
//         }
//     else{
//         for(j=i;j<=n;j++)
//         {
//           s+=count+" "
//           count++
//         }
//         s+='\n'   
//         }
// }
// console.log(s)

//Q13
// n=10
// for(i=1;i<=n;i++){
//   s=''
//   for(j=1;j<=i;j++)
//   {
//     s=s+(i*j)+" "
//   }
// console.log(s)
// }

// Q14
// let n = 5; // height of pattern
// let string = "";
// let count = 1;
// // External loop
// for (let i = 1; i <= n; i++) {
// //   Internal loop
//   if(i<=4){
//      for(j=i; j<10; j++)
//      {
//         string +=' '
//       }
//      for (let j = 1; j <= i; j++) {
//        string +=count+ '';
//        count++;
//        }
//      }
//    else{
//         for(j=i; j<n; j++)
//         {
//            string +=''
//          }
//         for (let j = 1; j <= i; j++) {
//           string +=count+'';
//           count++;
//           }
//    }
//   string += "\n";
// }
// console.log(string);

//Q15
// let n = 5; 
// let s= "";
// // External loop
// for (let i = 1; i <= n; i++) {
//   // printing characters
//   for (let j = 0; j< i; j++) {
//     s+= String.fromCharCode(j + 65);
//     // to convert the number to a letter.
//     //ASCII OF A=65,Z=90
//   }
//   s += "\n";
// }
// console.log(s);

// Q16
// n=3//no.of rows
// s=''
// for(i=1;i<=n;i++){
//   for(j=0;j<n-i;j++)
//   {
//     s+=' '
//   }
//   for(j=0;j< (2*i-1);j++)
//    {
//    s+=String.fromCharCode(j + 65)
//    }
//   s+='\n'
// }
// console.log(s)

//Q17
// n=5
// s=''
// for(i=1;i<=5;i++){
//   s=s+'A '
//   console.log(s)
// }

//.......................******WEDNESDAY****..................

////Write a  program that will accept the base and height of a triangle and compute the area?
// l=2
// b=3
// A=(l*b)/2
// console.log("area of the triangle :" +A)

//Write a  program to calculate body mass index?
// BMI = (weight) / (height * height)
// h=1.7
// w=60
// BMI=(w)/(h*h)
// console.log("BMI OF A PERSON:" +BMI)

//Find the cube root of a number ?
// a=27
// console.log(Math. cbrt(a))
// //OR
// console.log(Math. pow(a,1/3))

//Write a  program to compute the distance between the points (x1, y1) and (x2, y2)
// A(ax,ay)
// ax=1
// ay=7
// // B(bx,by)
// bx=5
// by=4
// // console.log(Math.pow((ax-bx),2))
// // console.log(Math.pow((ay-by),2))
// AB= Math.sqrt(Math.pow((ax-bx),2)+(Math.pow((ay-by),2)))
// console.log("Distance b/w  given two  points is " + AB)



// Write a  program to filter the positive numbers from a list?
//sovling using array data type becoz there is no list data type in js
// let numArr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
// // using filter method
// output = numArr.filter(num => num > -1)
// console.log(output)

// let numArr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
// final=''
// for(i=0;i<=numArr.length;i++){
//     if(numArr[i]>=0){
//     final=final+numArr[i]+' '
//     }
//     else {
//         console.log("no positive numbers in array")
//     }
//     }
//     console.log(final)



// Write a  program to test whether a passed letter is a vowel or not?
//using array
// userenter='a'
// vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
// if(vowel.includes(userenter)){
//     console.log(" it's is vowel : " + userenter)
// }
// else{
//     console.log(" it's not a vowel : " + userenter)
// }

//method2
// let  ch = 'i';

// if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' || ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U' )
//     console.log(ch + " is vowel");
// else
//     console.log(ch + " is consonant");


//.....................*****SATURDAY******..............

// WAP to Check whether given year is a leap year or not?
// function leap(n){
//     //   or 
//     // if((n%4==0) && (n%100==0)  || (n%400==0))
//         if((n%400==0) && (n%100==0)  )
//                         //century year (ending with 00)
//         {
//             console.log(`it's a leap year: ${n}`)
//         }
    
//         else if((n%100!=0) && (n%4==0))
//         //not divided by 100 means not a century year
//         {
//             console.log(`it's a leap year: ${n}`)
//         }
//         else {
//             console.log(`not a leap year: ${n}`)
//         }
//     }
//     leap(2000)

    // WAP to check whether given string is a palindrome or not?
// function palindrome(str){
//     let L=str.length
//      for (let i = 0; i < (L / 2); i++) {
 
//          // check if first and last string are same
//          if (str[i] !== str[L - 1 - i]) {
//              return 'It is not a palindrome';
//          }
//      }
//      return 'It is a palindrome';
//  }
//  console.log(palindrome('madam')) //It is a palindrome
//  console.log(palindrome('ant')) //It is not a palindrome

// WAP to find sum of all the digits of given input number
// function  digsum(num){
//     let sum=0
//     // console.log('number is ', num)
//     len=num.length
//     while(num!=0){
//         sum+=(num%10)
//         num = Math.floor(num / 10);
//     }
//     return sum
// }
// console.log(digsum(123))// IF WE GIVE '0' IN Beginning JS TREATS IT AS A OCTAL NUMBER INPUT


// WAP to delete all the positive numbers from the arr
   //Note : Do not create separate Array, Remove the positive elements from the existing array.
//    input: [2,-1,-5.6,4,89,43,-35,09]
//           output: [-1,-5.6,-35]
//way1
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

//way2
//using length and sort method
// a= [2,-1,-5.6,4,89,43,-35,09]
// a.sort();
// count=0
// for(i=0;i<=a.length;i++){
// if(a[i]<0){
//     count++
// }
// }
// a.length=count
// console.log(a)

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

//way2
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
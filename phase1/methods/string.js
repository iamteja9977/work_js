//string can be written either in single quotes or in  double quotes

//  print "hey papa "loveyou""
var a= "hey papa 'loveyou' \n"
var b= 'do you "love" me ..?\n '
var c= `yes yes ...!`
console.log(a ,b,c)

console.log('\n')
// ESCAPE CHARACTER - \
var d = "hi i\'m a \"joker\""//imp
console.log(d)
console.log('\n')

var e='smart'   // s  m  a  r  t 
       //          0  1  2  3  4 indexing
       //         -5 -4 -3 -2 -1
               
// Indexing
console.log(e[0])//only s
// Slice
 console.log(e.slice(0))// there is no '0' index in reverse order so gives whole string
 console.log(e.slice(1)) //till 1
 console.log(e.slice(0,1))//'0' to '1' is excluded
 console.log(e.slice(-2))//till -2
 console.log(e.indexOf('s'))
 console.log(e.indexOf('m'))//gives the index of respected lettes

 console.log('\n')
 console.log(e.indexOf('3'))//here '3' is not in the given string 
 //to show an error it give  o/p as -1

console.log(e.length)
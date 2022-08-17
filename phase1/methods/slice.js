// works on both array and string
//array
let a=['a','b','c','d']
console.log(a, typeof a)
console.log(a.length)
console.log(a[3])
console.log(a[3,1])
console.log(a[0,3,1])//starting values does not effect the last index
console.log(a[2,3])//
console.log('\n')
console.log(a.slice(0))//starts from 0 till the end 
console.log(a.slice())//default entire array
console.log(a.slice(2))//slice(Start,end) default is end  .here end is excluded
console.log(a.slice(0,2))//prints the index values os 0,1
console.log('\n')

let A=['a',['b','c'],['dog','ear','f']]
console.log(A.length)//3
b = A[1]//value of index1
console.log(A[1])
console.log(b)//both same
console.log(b[1])
console.log(A[1][1])//both same using 2D
console.log(A[2][0][2])
console.log('\n')

//string
let w=['a','b','c','d']
console.log(w.slice(0))//starts from 0 till the end 
console.log(w.slice())//default entire string
console.log(w.slice(2))//slice(Start,end) default is end  .here end is excluded
console.log(w.slice(0,2))//prints the index values of 0,1




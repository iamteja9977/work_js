//only works in arrays
let a=['a','b','c','d']
console.log(a.splice(0))//entire array
console.log(a.splice(1,3))//means splice cann't work with strings
console.log('\n')

//array
a = [1,2,3,4,5,6,7]
// a.splice(0)//its prints emptry array
// console.log(a)

a.splice(1,2)//no need to reassign in splice(default)
console.log(a)
a.splice(2,2)//performs on the updated array 'a'; 
console.log(a)

a = [1,2,3,4,5]
a.splice(1,3)//not need to reassign
console.log(a)//splice prints removed part ,not selected
console.log('\n')
a = [1,2,3,4,5]
a=a.slice(1,3)// need to reassign in slice(dynamically)
console.log(a)//slice prints selected part 





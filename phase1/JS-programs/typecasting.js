//Type casting: Converting one datatype to other
// When the operand of an operator are different data types, one of them will be
// converted to an 'equivalent' value of the other operands type.


console.log(12+'hi')
console.log('12' + 'hi')
console.log('hi'+12)
console.log('\n')
console.log('100' + 1 + 2 + '3' + 4) 
console.log(100 + 1 + 2 + '3' + 4) 
console.log('\n')
console.log('1' + '2') //12
console.log('1' + 2) //12
console.log(1 + '2')  // 12
console.log(100 + 1 + '2')  // 1012
console.log('100' + 1 + '2')  // 10012
console.log('100' + 1 + 2)  // 10012

console.log('\n')
console.log('1' - '2') //not posible in string thats why it gives -1
console.log('1' - 2) // 
console.log(1 - '2')  // 
console.log(100 - 1 + '2')  // 992
console.log('100' - 1 - '2')  // 97
console.log('100' - 1 - 2)  // 97

console.log('\n')

console.log(false + false)//0
console.log(false + true)//1
console.log(false + 0)//0
console.log(true+ 0)//1
console.log(1+ true)//2
console.log('1' * '2') //2
console.log('1' * 2) // 2
console.log(1 * '2')  // 2
console.log(100 * 1 + '2')  //1002
console.log('100' * 1 * '2')  //200
console.log('100' * 1 * 2)  // 200
console.log("100" * "2");//200

console.log('100' + null); //100null
console.log(100 + null); //100 becoz null=0
console.log(8 * null); //0

console.log('\n')
console.log(4 / "CFI"); //CFI IS NOT A NUMBER
console.log(89 - "CFI");


console.log(1/0)//infinity
console.log(1 / Infinity);// 0
console.log(Infinity / Infinity);// NaN
console.log(-Infinity / 0);// -(any/0)=-(infinity)
console.log(Infinity / 0);//(any/0)=(infinity)


console.log('\n')
console.log(NaN == NaN);//NaN is not a particular value so we don't know which val it is
console.log(NaN === NaN);//similarly

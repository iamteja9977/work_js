
var a=13,b=15
console.log(a--) //a = 13(12)
console.log(b--) // b = 15(14)
console.log(a + b-- + a-- -b--) //12+14(13)+12(11)-13(12) = 25; a=11,b=12
console.log(a-- + b +b-- + a--) //11(10)+12+12(11)+10(9)=45; a=9,b=11
console.log(a-- - b) // 9(8)-11=-2 ; a=8,b=11
console.log(a,b) //8,
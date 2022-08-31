// let a = {
//     a: "adnan",
//     b: "CFI"
// }

// let b = a

// console.log(b);
// // let c = [1, 2, 3];
// // let d = c
// // console.log(b == a);
// // console.log(d==c);
// // console.log(d===c);
// console.log(a===b);

let array = [100, 600, 400, 200, 700, 900, 1001];

array.sort((a, b) => {
    return a - b;
})


array.sort((a, b) => {
    return b - a;
})

console.log(array);
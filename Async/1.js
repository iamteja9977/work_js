// console.log("Hello World");

// setTimeout(() => {
//     console.log("I am here after 3 Seconds")
//     setTimeout(() => {
//         console.log("I Taking 4 seconds")
//     }, 4000);
// }, 3000);

// // for(let i=0;i<50000;i++){
// //     console.log(i);
// // }

// setTimeout(() => {
//     console.log("I am Coming After 5 Seconds")
// }, 5000)

// setTimeout(() => {
//     console.log("When Am I Displaying?");
// }, 0)

// console.log("Good Morning ! Don't Yawn");


console.log("Hello World");

let a = () => {
    console.log("I am here after 3 Seconds")
    setTimeout(() => {
        console.log("I Taking 4 seconds")
    }, 4000);
};
setTimeout(a, 3000);

// for(let i=0;i<50000;i++){
//     console.log(i);
// }
let b = () => {
    console.log("I am Coming After 5 Seconds")
};
setTimeout(b, 5000)

setTimeout(function c() {
    console.log("When Am I Displaying?");
}, 0)

console.log("Good Morning ! Don't Yawn");
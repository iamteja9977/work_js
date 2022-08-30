const arr=[11,22,33]
// const obj={...arr};
// console.log(obj);


// const arr1=[1,2,3,4,56,7]
// const arr2=[...arr1]
// console.log(arr2)

//array literals
// const arr1=[1,2,3,...arr,4,56,7]
// console.log(arr1)

// const arr3=[...arr,...arr1]
// console.log(arr3)

//object literals
let obj1={"a":"i'm",
           "b":"cs"       
}
// let obj2={...obj1}
// console.log(obj2)

// console.log({...obj1,...arr})//arr and obj combine  also works ,not use sq.brackets

let response={...obj1,
           "place":"hyd",
           "age":"21"
}
console.log(response)
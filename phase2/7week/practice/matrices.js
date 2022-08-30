import readlineSync from "readline-sync";
function matrix(){
let R = readlineSync.questionInt("enter no.of Rows:")
let C = readlineSync.questionInt("enter no.of  Cols:")
console.log(`given matrix is  of ${R} * ${C}`)

let create = new Array(R)//creates array with empty spaces i.e, 'R'
for(let i=0;i<create.length;i++){
    create[i] = new Array(C)
}
//taking i/ps from the user
for(let i=0;i<create.length;i++){
    for(let j=0;j<create[0].length;j++){
        create[i][j] = readlineSync.questionInt(`enter element of ${i},${j}:`)
    }
}
console.log(create)
return create;
}

//for printing matrix
//a.length--> no.of rows
//a[0].length -->no.of cols
// let mat = matrix()        //comment this line when you want to export
function PrintMatrix(mat){
    for(let i=0;i<mat.length;i++){
        let A = ""
        for(let j=0;j<mat[0].length;j++){
            A += mat[i][j]+" "
        }
        console.log(A)
    }
}
// PrintMatrix(mat) //comment this line when you want to export 

export {matrix,PrintMatrix}
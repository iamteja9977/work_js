import { matrix,PrintMatrix } from "./matrices.js";
function ADD(){
    let matrix1 = matrix()
    PrintMatrix(matrix1)
    let matrix2 = matrix()
    PrintMatrix(matrix2)
    if(matrix1.length == matrix2.length && matrix1[0].length == matrix2[0].length){
        //check condition
        //cretes empty array
        var matrix3 = new Array(matrix1.length)
        for(let i=0;i<matrix1.length;i++){
            matrix3[i] = new Array(matrix1[0].length)
        }
        //for adding
        for(let i=0;i<matrix1.length;i++){
            for(let j=0;j<matrix1[0].length;j++){
                matrix3[i][j] = matrix1[i][j] + matrix2[i][j]
        }
    }
    console.log("\n matrix after adding") 
PrintMatrix(matrix3)
    }
    else{
        console.log(`length of C1 is not same  as length of R2`)
    }
  
}
ADD()
import { matrix,PrintMatrix } from "./matrices.js";
function multiplication(){
       let matrix1 = matrix()
       PrintMatrix(matrix1)
       let matrix2 = matrix()
       PrintMatrix(matrix2)

       if(matrix1[0].length == matrix2.length ){
        
           var matrix3 = new Array(matrix1.length)
           for(let i=0;i<matrix1.length;i++){
               matrix3[i] = new Array(matrix1[0].length)
           }
        
//for multiplication
  // Initializing elements of matrix mult to 0.
  for(let i=0;i<matrix1.length;i++){
            for(let j=0;j<matrix2[0].length;j++){
                matrix3[i][j]=0
            for (var k = 0; k < matrix1[0].length; k++) {
                matrix3[i][j]+= matrix1[i][k] * matrix2[k][j];
                // PrintMatrix(result)
        }
     }
    }
    //
    console.log("\n matrix after mulplication:")
    PrintMatrix(matrix3)
} 

       else{
           console.log(`length of C1 is not same  as length of R2`)
       }
     
    }
    
    multiplication()
// WAP to subtract two numbers without using (-) subtraction
// import readlineSync from "readline-sync";
// let A = readlineSync.questionInt("enter the first operant:")
// let B = readlineSync.questionInt("enter the second operant:")
A=10
B=0
function sub(A,B){
    if(B==0){
        return A
    }
    else{
        let result=A+(~B)+1
        return result;
    }
    
}
output=sub(A,B)
console.log("A-B ="+ output)
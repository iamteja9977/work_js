import readlineSync from "readline-sync"
import base64Decoding from './decoder.js'
import base64Encoding from './encoder.js'

function cli() {
    console.log("  Menu options")
    console.log("press 0 to Exit")
    console.log("press 1 to Encode")
    console.log("press 2 to Decode")
    let inputString = readlineSync.questionInt("which operation Do you want to perform:");

    switch(inputString){
        case 0:
            console.log("You are  performing ntg here.\n")
            break;
            
        case 1:
            base64Encoding()
            rerun()
            break;
            
        case 2:
            base64Decoding() 
            rerun()
            break;

          default:
            console.log("PLEASE,Enter the right input.")
            cli()

    }
}
cli()

function rerun(){
let inputString2= readlineSync.question("Do you want to continue(y/n):");

if(inputString2=="y" || inputString2=="Y" || inputString2=="YES" || inputString2=="yes"){
    console.log('\n1')
    cli()
}
else
console.log("thank you,FOR USING OUR CLI ")
// else if(inputString2=="n" || inputString2== "N"){
//     console.log("thank you,FOR USING OUR CLI ")
//     return;
// }
// else{
//     console.log("Input invalid")
// }
}



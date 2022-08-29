import readlineSync from "readline-sync"
import base64Decoding from './decoder.js'
import base64Encoding from './encoder.js'

function main() {
    console.log("---------------------------")
    console.log("BASE 64 CLI APPLICATION");
    console.log("---------------------------")

    console.log(`Press 0 To Exit  
                \nPress 1 to Encode
                \nPress 2 to Decode\n`);

    let choice = readlineSync.questionInt("Please Select an Option from the Given Menu : ");
    while (!(choice >= 0 && choice <= 2)) {
        choice = readlineSync.questionInt("Invalid Option, Please Try Again : ");
    }
    switch (choice) {
        case 0:
            console.log("Thank you for Using our Application. Bye");
            break;
        case 1:
            base64Encoding()
            // rerun()
            break;
        case 2:
            base64Decoding()
            // rerun()
            break;
        default:
            console.log("Invalid Input");
            break;
    }
    let shouldContinue=readlineSync.question("Do you want to continue ?(y/n) : ")
    if (shouldContinue == "y" || shouldContinue == "Y" || shouldContinue == "yes") {
        main();
    }
    else {
        console.log("Thank you for Using our Application, Bye!");
    }
}
main();


// function rerun(){
//     let inputString2= readlineSync.question("Do you want to continue(y/n):");
    
//     if(inputString2=="y" || inputString2=="Y" || inputString2=="YES" || inputString2=="yes"){
//         console.log('\n1')
//         main()
//     }
//     else
//     console.log("thank you,FOR USING OUR CLI ")
// }
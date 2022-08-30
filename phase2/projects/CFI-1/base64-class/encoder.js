import readlineSync from "readline-sync"

function base64Encoding(){
    let inputString=readlineSync.question("enter the string:");
    while(!inputString){
        inputString=readlineSync.question("Invalid input, please try again:");
    }

    //split characters separated by commas (including the space)
    let splitString=inputString.split("");
    console.log("the string is : ", splitString);
     //map function returns new array ,where as foreach function doesn't return anything
    //  charCodeAt gives the ASCII codes of characters
    let ASCIICodes= splitString.map((char) => char.charCodeAt());
    console.log("THE  ASCII ARRAY IS :",ASCIICodes )
    //  here we r converting the ASCII values of character to binary
    let binaryCodes=ASCIICodes.map((num)=> num.toString(2));
    console.log(" Bianry codes :", binaryCodes);
//    but it gives us the 7bit binary
//      to make it 8bit binary v r adding "0" to the existing 7bit binaries
    let binaryCodes8bit=binaryCodes.map((bin)=> {
        while(bin.length<8){
        bin="0"+bin;
        }
        return bin;
    })
    console.log("8bit binaries :" ,binaryCodes8bit);

    // joining all the 8bit binaries and spliting every bit,
    // becoz in next step we need to form 6bit binaries
    let oneBinary=binaryCodes8bit.join("").split("")
    console.log(oneBinary);

//     //splitting into 6bit binaries
    let binaryCodes6bit=[];
    while(oneBinary.length!=0){
        binaryCodes6bit.push(oneBinary.splice(0,6).join("")); 
        // splice method creates new sub arrays in the existing array
        // join method joining them sub-arrays
    }
    console.log("6bit binaries :" ,binaryCodes6bit);

// while splitting into 6bits,the last element of array will not have 6bits
// to make last element is of 6bits,we add EVEN no.of 0's its called padding.

let lastElement= binaryCodes6bit[ binaryCodes6bit.length-1];//storing last element
if(lastElement.length!=6){
    var counter=0;
    while(lastElement.length<6){
        lastElement=lastElement + "0";
        counter++
    }
    binaryCodes6bit[ binaryCodes6bit.length -1]=lastElement;//re-assigning last element updated value to the array.
}
console.log("binary in 6 bits are :",  binaryCodes6bit)

// convertion 6bit binary to decimal
// parseInt(string, radix)
// parseInt() parses parses a value as a string  and returns the first integer.
// A radix parameter specifies the number system to use.
// 2 = binary, 8 = octal, 10 = decimal, 16 = hexadecimal.

    let bintoDecimal=binaryCodes6bit.map((str)=>parseInt(str,2));
    console.log("base 64 decimals : ",bintoDecimal)

    // here we are passing string manually
    let base64="ABCDEFGHILKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        // let base64=/^(?:[A-Za-z\d+/]{4})*(?:[A-Za-z\d+/]{3}=|[A-Za-z\d+/]{2}==)?$/
    
    let base64final=bintoDecimal.map((dec)=>base64[dec])
console.log("base 64 string :", base64final);

// ACC to count ,we add  no.of '=' at the end of the string of base64
if(counter==2){
    base64final.push("=")
}else if(counter==4){
    base64final.push("==")
}
let finalBase64String=base64final.join("");
console.log("final output :", finalBase64String)

}
// base64Encoding();
export default base64Encoding;

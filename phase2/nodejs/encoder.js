import readlineSync from "readline-sync"

function base64Encoding(){
    let inputString=readlineSync.question("enter the string:");

    //split characters
    let splitString=inputString.split("");
    console.log("the string is : ", splitString);
     
    let ASCIICodes= splitString.map((char) => char.charCodeAt());
    console.log("THE  ASCII ARRAY IS :",ASCIICodes )

    let binaryCodes=ASCIICodes.map((num)=> num.toString(2));
    console.log(" Bianry codes :", binaryCodes);

    let binaryCodes8bit=binaryCodes.map((bin)=> {
        while(bin.length<8){
        bin="0"+bin;
        }
        return bin;
    })
    console.log("8bit binaries :" ,binaryCodes8bit);

    let oneBinary=binaryCodes8bit.join("").split("")
    console.log(oneBinary);

    //splitting into 6 bits
    let binaryCodes6bit=[];
    while(oneBinary.length!=0){
        binaryCodes6bit.push(oneBinary.splice(0,6).join("")); 
    }
    console.log("6bit binaries :" ,binaryCodes6bit);

//padding and ADD
let lastElement= binaryCodes6bit[ binaryCodes6bit.length-1];
if(lastElement.length!=6){
    var counter=0;
    while(lastElement.length<6){
        lastElement=lastElement + "0";
        counter++
    }
    binaryCodes6bit[ binaryCodes6bit.length -1]=lastElement;
}
console.log("binary in 6 bits are :",  binaryCodes6bit)

    let bintoDecimal=binaryCodes6bit.map((str)=>parseInt(str,2));
    console.log("base 64 decimals : ",bintoDecimal)
    let base64="ABCDEFGHILKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

    let base64final=bintoDecimal.map((dec)=>base64[dec])
console.log("bads 64 string :", base64final);
if(counter==2){
    base64final.push("=")
}else if(counter==4){
    base64final.push("==")
}
let finalBase64String=base64final.join("");
console.log("final output :", finalBase64String)
}
base64Encoding();
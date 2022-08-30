// import readlineSync from "readline-sync"

function base64Decoding() {
    let inputString = document.getElementById("textinput").value
 
    console.log(inputString)
 
    // const base64regex = /^[a-zA-Z0-9+/\=]*$/;
    // if (!(base64regex.test(inputString))) {
    //     return console.log("Not Valid")
    // }
    // console.log("valid")
const base64regex=/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/
while(!inputString || (!(base64regex.test(inputString)))){
    inputString=prompt("Invalid input, please try again:");
    console.log(inputString)
    document.getElementById("textinput").value= inputString;
    // alert("invalid")
}

    let splitString=inputString.split("");
    console.log("the string is : ", splitString);
    let count=0;
    for(let i=0;i<splitString.length;i++){
        if(splitString[i]=='='){
            splitString.pop()
            count++
        }
    }
    
    
    console.log("AFTER REMOVING '='  FROM string is : ", splitString);
    let base64="ABCDEFGHILKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
   let unicode= splitString.map((charIND) => base64.indexOf(charIND))
   console.log("index val:",unicode)
   let binaryCodes=unicode.map((num)=> num.toString(2));
    console.log(" Binary codes :", binaryCodes);
    
    // for(let i=0;i<binaryCodes.length;i++){
    
    //  if(binaryCodes[i].length!=6){
    //       while(binaryCodes[i].length<6){
    //        binaryCodes[i]= "0"+ binaryCodes[i];
    //      }
    //   }
    // }
    // console.log("6bit binary:", binaryCodes)

    let binaryCodes6bit=binaryCodes.map((bin)=> {
        while(bin.length<6){
        bin="0"+bin;
        }
        return bin;
    })
    console.log("6bit binaries :" ,binaryCodes6bit);

// JOIN AND SPLIT
    let oneBinary=binaryCodes6bit.join("").split("")
    console.log(oneBinary);

    if(count==1){
        oneBinary.splice((oneBinary.length-2))
    }else if(count==2) {
        oneBinary.splice((oneBinary.length-4))
    }
    let binaryCodes8bit=[];
    while(oneBinary.length!=0){
        binaryCodes8bit.push(oneBinary.splice(0,8).join("")); 
        // splice method creates new sub arrays in the existing array
        // join method joining them sub-arrays
    }
    console.log("8bit binaries :" ,binaryCodes8bit);

    let bintoDecimal=binaryCodes8bit.map((str)=>parseInt(str,2));
    console.log("base 64 decimals : ",bintoDecimal)
    let FINAL_OUTPUT= bintoDecimal.map((char) => String.fromCharCode(char));
    console.log("FINAL OUTPUT :",FINAL_OUTPUT )
output=FINAL_OUTPUT.join("");
document.getElementById("newtext").innerHTML = output;
}

// base64Decoding(); 
// export default base64Decoding;
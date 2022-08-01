//Find whether a given number is a prime number or not?
const num=22;
 let flag=true;//flg

if (num === 1) {
    console.log("1 is neither prime nor composite number.");
}

else if (num > 1) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) 
        {//not to be multiple of any number
            flag = false;
            break;
        }
    }
    if(flag){
        console.log(`${num}  is prime`)
        }
    else{
        console.log(`${num}   is not  prime`)
        }
 }
else{
 console.log("enetered num is less than 1")
    }

    




// WAP to Check whether given year is a leap year or not?
function leap(n){
//   or 
// if((n%4==0) && (n%100==0)  || (n%400==0))
    if((n%400==0) && (n%100==0)  )
                    //century year (ending with 00)
    {
        console.log(`it's a leap year: ${n}`)
    }

    else if((n%100!=0) && (n%4==0))
    //not divided by 100 means not a century year
    {
        console.log(`it's a leap year: ${n}`)
    }
    else {
        console.log(`not a leap year: ${n}`)
    }
}
leap(2019)
// WAP to find sum of all the digits of given input number

function  digsum(num){
    let sum=0
    // console.log('number is ', num)
    len=num.length
    while(num!=0){
        sum+=(num%10)
        console.log('sum is ', sum)
        num = Math.floor(num / 10);
        console.log('num is ' ,num)
    }
    return sum
}
console.log(digsum(0123))
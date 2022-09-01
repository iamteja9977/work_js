// WAP to check whether given string is a palindrome or not?
function palindrome(str){
   let L=str.length
    for (let i = 0; i < (L / 2); i++) {

        // check if first and last string are same
        if (str[i] !== str[L - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}
console.log(palindrome('madam')) //It is a palindrome
console.log(palindrome('ant')) //It is not a palindrome

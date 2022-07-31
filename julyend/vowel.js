
// Write a  program to test whether a passed letter is a vowel or not?

//using array
userenter='y'
vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

if(vowel.includes(userenter)){
    console.log(" it's is vowel : " + userenter)
}
else{
    console.log(" it's not a vowel : " + userenter)
}

//manual checking
// let  ch = 'i';

// if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' || ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U' )
//     console.log(ch + " is vowel");
// else
//     console.log(ch + " is consonant");

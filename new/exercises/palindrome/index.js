// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    const reversed = str.split('').reverse().join('');
    const x = str === reversed ?  true : false;
    return x
    // another way to write the return simpler that will return a boolean
    //return str === reversed
};

// solution 2

function palindromeTwo(str) {
   // .every is going to check the boolean on every element in the array
   // char represents the characters in the str and i represents the index of the array
   return str.split('').every((char, i) => {
    console.log(char, i)
    // compares the current element to the last element in the array 
        return console.log(char === str[str.length -i -1])
   })
};


palindrome('abba');
palindrome('abcdefg');
palindromeTwo('hello');
palindromeTwo('abba');

module.exports = palindrome;

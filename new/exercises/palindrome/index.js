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

palindrome('abba');
palindrome('abcdefg');

module.exports = palindrome;

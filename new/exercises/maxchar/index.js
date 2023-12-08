// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// common questions
// what is most common character in the string
// does string A have same characters as string B (is it an anagram)
// does the given string have repeaters characters

// building a character map to loop throught the string 
function maxChar(str) {
    const charMap = {};
    let max = 0; // max number value of the same character
    let maxChar = ''; // setting to empty string so we can set the character of that highest number of uses
  
    // for each char in the str, loop over to see if it exist, 
    // if exist then add 1, if does not then assign it to one
    // side note: a for of loop allows you to use it on any iterables like arrays, strings
    for(let char of str ) {
        if(charMap[char]) {
            charMap[char]++
        } else {
            charMap[char] = 1;
        }
    };
    console.log(charMap);
    //console.log(charMap.l);

    // for in allows you to loop through a key value pair, such as a object 
    // char represents the key of the key value pairs in the object 
    for(let char in charMap) {
        // if number is greater than 0, assign new values 
        if(charMap[char] > max) {
            max = charMap[char];
            maxChar = char;
        }
    }
    return console.log(`max number of letter: ${max} / max letter: ${maxChar}`)

};
maxChar('Hello World')

module.exports = maxChar;

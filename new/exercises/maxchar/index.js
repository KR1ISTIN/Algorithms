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
  
    // for each char in the str, loop over to see if it exist, 
    // if exist then add 1, if does not then assign it to one
    for(let char of str ) {
        if(charMap[char]) {
            charMap[char]++
        } else {
            charMap[char] = 1;
        }
    };
    console.log(charMap);
    console.log(charMap.l);

};
maxChar('Hello World')

module.exports = maxChar;

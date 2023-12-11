// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    const aCharMap = helperFunction(stringA);
    const bCharMap = helperFunction(stringB);

    // IF DOES NOT HAVE SAME AMOUNT OF KEYS
    if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
        console.log('not the same number of keys, therefore not an anagram');
        return false
    };

    // IF DOES NOT HAVE SAME NUM OF CHARACTERS
    for (let char in aCharMap) {
        if (aCharMap[char] !== bCharMap[char]) {
            console.log('does not have same number of characters')
            return false;
        }
    }

    console.log('is an anagram');
    return true;

}

function helperFunction(str) {
    const charMap = {};
    
    // any char that is not a number, capital char or lowercase character then replace it with nothing
    for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1;
        console.log(charMap[char], char);
    }

    console.log(charMap);
    return charMap;
};

  //anagrams('rail safety', 'fairy tales'); //true
  anagrams('RAIL! SAFETY!', 'fairy taless'); //false
  //anagrams('Hi there', 'Bye there'); // false
module.exports = anagrams;

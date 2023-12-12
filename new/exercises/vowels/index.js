// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0



function vowels(str) {
    let counter = 0;
    const vowelChecker = ['a', 'e', 'i','o','u'];

    for (let char of str.toLowerCase()) {
        if(vowelChecker.includes(char)) {
            counter++
        }

    }

    return console.log(`there are ${counter} vowels in this string`);
}

vowels('Hi There!'); 

module.exports = vowels;

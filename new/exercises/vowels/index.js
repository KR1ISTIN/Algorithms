// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0



function vowels(str) {
    // set a count
    // set up a array to track which are vowles
    // will need to loop through the string given
    // will need to check in the string INCLUDES a vowel
    // if it does the count needs to be updated
    let counter = 0;
    const vowelChecker = ['a', 'e', 'i','o','u'];

    for (let char of str.toLowerCase()) {
        if(vowelChecker.includes(char)) {
            counter++
        }
    }
    return console.log(`there are ${counter} vowels in this string`);
};

// solution two
function vowelTwo(str) {
    // match to going to take a regex and inside the backets contains what we want the str to match to
    // the g makes sure we dont stop at the first occurance 
    //i stands for case insensitive (will take care of upper and lowercase vowels)
    // match will then return a array of everything found 
    // IF no matches are found with the method match then null will return 
    const matches = str.match(/[aeiou]/gi);
    //console.log(matches);

    const totalVowels = matches ? matches.length : 0;
    console.log(vowels);
    return totalVowels;
}

vowels('Hi There!'); 
vowelTwo('Hello World!');

module.exports = vowels;

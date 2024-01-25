// Write code to create a function that accepts a string and returns an object containing the number of times each character appears in the string

function characterCount (str) {
    const countCharacters = {};
    const lowerCase = str.toLowerCase();
  

    for(let i = 0; i <= lowerCase.length; i++) {
        console.log(lowerCase[i])
        const character = lowerCase[i];

        if(character in countCharacters) {
            countCharacters[character]++
            console.log(countCharacters[character], character)
        } else countCharacters[character] = 1
    }

    console.log(countCharacters);
    return countCharacters
};

// take in a str
// set up an object
// loop through the str
// check to see if the letter is already in the new object
// if it is then the count needs to add 1
// else we need to set the character to 1
// then return the new obj

characterCount('Hello hello World!');
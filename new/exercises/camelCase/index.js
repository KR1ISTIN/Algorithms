// Write code to create a function that accepts a string and returns the string in camelCase


// camelCase for using an array 
const camelCase = function(str) {
    const lowerCase = str.toLowerCase().split(' '); // turns into an array
    console.log(lowerCase, 'line 7')
    
    let newArr = [];

    for(let i = 0; i < lowerCase.length; i++) {
        let word = lowerCase[i];
        //console.log(word, '---------line 13--------')
        
        let letters = word.split(''); // creates new array
        //console.log(letters, 'line 16')
        
        if( i === 0) {
            newArr.push(...word); // dont have to use the spread operator unless i want to spread out the letter in the array instead of just the word
            // can use the spread operator on strings bc its an iterable 
        }
        if (i > 0) {
            //console.log(letters[0], 'line 22')
            letters[0] = letters[0].toUpperCase(); // reassign the first letter to uppercase
            newArr.push(...letters); // spread out of that letters array into the newArr
        }
        
    }

    console.log(newArr.join(''));
};

camelCase('HElLo WoRlD nice To meet you!')

// camelCase for using an str
const camelCase2 = function(str) {
    let result = "";
    let words = str.toLowerCase().split(" "); // an array
  
    for (let i = 0; i < words.length; i++) { // loop through the array
      let word = words[i]; // values from array
      let letters = word.split(""); // now make another array to access letter from the word from the previous array
      console.log(word, letters)
  
      if (i > 0) {
        letters[0] = letters[0].toUpperCase(); // reassign the first position in the array to an uppercase
      }
  
      result += letters.join(""); // now rejoin everything together
    }
  
    return console.log(result);
  };

  camelCase2('over tHe RainBow we GO');
// Write a function that takes two strings and returns true if every word found in the second string is present in the first string. 
// You will be checking for both words and their frequency.
// Assume you'll need to worry about casing, but the strings won't contain any punctuation.
//Assume neither string will be empty

const concertFlyer = function (magazine, flyer) {
    // what if i create a map that has key value pairs
    // i can loop over the str and set the keys
    // if the key is not present set it to 1, else add one to the count for the value

    // loop over second str and check if the map has the same key as the current value being evaluated in the second str

    const magazineMap = new Map();
    const flyerMap = new Map();

    for(let word of magazine.replace(/[^\w\s']/g, '').toLowerCase().split(' ')) {
        console.log(word)
        if(!magazineMap.has(word)) {
            magazineMap.set(word, 1)
        } else {
            const key = magazineMap.get(word);
            magazineMap.set(word, key + 1)
        }
    }

    for(let word of flyer.replace(/[^\w\s']/g, '').toLowerCase().split(' ')) {
        if(!flyerMap.has(word)) {
            flyerMap.set(word, 1)
        } else {
            const key = flyerMap.get(word);
            flyerMap.set(word, key + 1)
        }
    
    }

    for(let [word] of flyerMap) {
        //console.log(word);
        if(flyerMap.get(word) !== magazineMap.get(word)) {
            return false
        }
    }
   
    return true
};
const str1 = 'Why are there so many songs about rainbows?';
const str2 = 'so many songs';
concertFlyer(str1,str2);

// /[^\w\s']/g: This regular expression defines a character class that matches any character that is not a word character 
//(\w includes letters, digits, and underscores), not a whitespace character (\s), 
//and not an apostrophe (').
//.replace(): This method is used to replace the matched characters with an empty string, effectively removing them.
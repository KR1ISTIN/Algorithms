// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    const words =[];

    // split will create a new array splitting each word at the space
    // loop through new array created by the split method 
    for(let word of sliceStr.split(' ')) {
        // take first letter from each vlaue and then join it with the rest of the word which we get from slice
        // slice(1) will slice everything AFTER (not before) index 1 only
        //console.log(word.slice(1)); 
        //console.log(word[0].toUpperCase() + word.slice(1));

        words.push((word[0].toUpperCase() + word.slice(1)));
    }

    console.log(words.join(' '));
    return words.join(' ');
}
capitalize('a lazy fox'); 

module.exports = capitalize;

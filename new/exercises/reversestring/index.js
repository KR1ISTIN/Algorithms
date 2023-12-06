// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // turn str into an array
    // take the new array and reverse vals
    // turn array back into a string

    const arr = str.split(''); // split out each letter and will return an array
    const reversed = arr.reverse(); // reverse all values backwards
    const newString = reversed.join(''); // turn the array back into a string with joining no spacing 
    console.log(newString);
    return newString
};
reverse('briley')


module.exports = reverse;

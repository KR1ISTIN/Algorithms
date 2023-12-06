// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// solution 1
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

// solution 2
// chaining methods since split and reverse will return an array
function reverseTwo(str) {
    const reversed = str.split('').reverse().join('');
    console.log(reversed)
};

// solution 3
function reverseThree(str) {
    let reversed = '';

    for(let char of str) {
        // this is still spell jarred bc we are looping through str and taking the 
        // empty string above and then adding each character 
        //reversed = reversed + char

        // still will cont reserve str, this is basically what is written on line 36
        //reversed += char

         // solution to revere str
         // taking we the first letter and adding to the the emptry string then 
         // loops to the second letter and adds it
         // will loop through all characters until they have been added backwards
         reversed = char + reversed
         
    }
    console.log(reversed)
};

// solution 4
function reverseFour(str) {
    // takes previous value rev then loops to the next char then adds it to the previous value
    // reduce takes two cb functions, the first arg is the cb arrow function, the second arg  is the starting position
    return console.log(str.split('').reduce((rev,char) => char + rev), '');
};

reverse('briley');
reverseTwo('kristin');
reverseThree('jarred');
reverseFour('reverseString');





module.exports = reverse;

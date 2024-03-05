// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    const reversed = n.toString().split('').reverse().join('');
    console.log(n, reversed, '..');

    // if n is less than 0
    if (n < 0) {
        return console.log(n, parseInt(reversed) * -1) // will return the "negitive" sign
    }

    console.log(parseInt(reversed), '--')
   
};
reverseInt(100);
reverseInt(50);
reverseInt(-7);

module.exports = reverseInt;

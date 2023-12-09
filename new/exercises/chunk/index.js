// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// size represents how many elements inside the sub arrays
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    const chunked = [];

    for (let el of array) {
        const last = chunked[chunked.length -1]; // last element of the array
        console.log(last, 'last')

        if(!last || last.length === size) {
            // adding a sub array is the length is equal to size
            console.log('if', el)
            chunked.push([el]);
          
        } else {
            console.log('else', el)
            last.push(el);
            
        }
    }
    console.log(chunked, 'chunked');
};
chunk([1, 2, 3, 4], 2);


const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

// examples below: 
// *** IMPORTANT*** start at index 0, 3 is the end index but does not include the value of index 3
// slice will create a copy of the array but does not change the original array

// const slice = letters.slice(0, 3);
// console.log(slice);
// console.log(letters);


function chunkL(array, size) {
    const chunked = [];
    let index = 0;

    while (index < array.length) {
        // will create a sub array starting at index 0 and ending at index + size
        // then index will be equal to index + size which would be 2
        // the second loop will now start at index 2 and end at index 4

        // slice will create multiple sub arrays within the chunked array
        chunked.push(array.slice(index, index + size));
        index+=size;
        
    }
    console.log(chunked);
};

chunkL(letters, 2);


module.exports = chunk;

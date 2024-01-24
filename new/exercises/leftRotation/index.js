// Write a function that takes an array and a positive integer and "rotates" the array to the left by the integer
// Modify the original array rather than returning a new one
// There is no need to return from this function

const leftRotation = (arr, positions) => {
    if(arr.length === 0) {
        return
    }

    // while positions is greater than 0
    while(positions > 0) {
        let first = arr.shift(); // removes first item from array;
        //console.log(first);
        arr.push(first); // modifying the array by adding the element that was removed to the end of the array
       
        positions-- // need a exit out of this loop
    };
    console.log(arr);
};

// check to see if the arr.length is === 0
    // if so then return 
// while the position is greater than 0
    // modify the arr by taking the first element off(using the shift method) then adding back onto the end of the array
        // that will alter the array to be left rotating

leftRotation([1,3,4,2,6,7,9,], 5)
// Write code to create a function that accepts an array of numbers, finds the largest two numbers, and returns the product of the two

// create a function that takes in array of numbers
// set two varaibles to the largest two numbers
// loop through the array
// check to see if one number is greater than the other
// set the number to the varaibles created

const greaterNumbers = function(arr) {
    let firstLargest = null;
    let secondLargest = null;

    for (let i = 0; i <= arr.length; i++) {
        const currentNum = arr[i]; // current value to be evalauted for > or <

        // resetting the values with new state 
        if(firstLargest === null || secondLargest === null) {
            firstLargest = currentNum;
            secondLargest = currentNum;
        } else if (firstLargest < currentNum) {
            secondLargest = firstLargest; // set this value first so THEN we can reassign firstlLargest
            firstLargest = currentNum;
            
        }
        //console.log(secondLargest, firstLargest)
    }

    return firstLargest * secondLargest;

};

const results = greaterNumbers([4, 8, 15, 16, 23, 42]);
console.log(results);


// this function finds the greates and least num in an array then find the difference 
const largestAndLeast = function(arr) {
    // setting to null just incase a negitive is used in the array
    let largest = null;
    let smallest = null;

    for ( num of arr) {
        const currentNum = num;
        
        if(largest === null || smallest === null) {
            // initalizing them for the first value of the array, then we can compare
            largest = currentNum;
            smallest = currentNum;
        } else if( currentNum > largest) {
            largest = currentNum;
        } else if ( currentNum < smallest) {
            smallest = currentNum
        }

        console.log(largest, smallest)
    }

    return largest - smallest
};

const result2 = largestAndLeast([4, 8, 15, 2, 23, 42]);
console.log(result2);
// Write code to create a function that accepts two arrays of numbers
// There will be one number common to both arrays
// Return the common number
// Do not use the `indexOf` or `includes` method

const commonElement = function(arrA, arrB) {
    const obj = {};

    // setting obj up and defining key value pairs
    for(let i = 0; i <= arrA.length; i++) {
        const num = arrA[i];
        console.log(num)
        obj[num] = true;
        //console.log(obj);
    };

    // looping through second arr
    for(let i = 0; i <=arrB.length; i++ ) {
        const num = arrB[i]; // value in the array
        // checking to see if current num in the second array is set to true then return
        if(obj[num] === true) {
            console.log(num);
            return num;
        }
    }

};
const arrA = [10, 8, 6, 4, 2];
const arrB = [8, 80, 800, 8000, 80000];

commonElement(arrA,arrB);
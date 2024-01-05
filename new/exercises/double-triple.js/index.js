// Write code to create a function that accepts an array of numbers and returns a new array that corresponds to the original array
// If a element in the original array is even, the element at the same index in the new array should be double the original element
// If an element in the original array is odd, the element at the same index of the new array should be triple the original element

const doubleTripleMap = function(arr) {
    const newArr = [];

    for (let num of arr) {

        if (num % 2 === 0) {
            num *= 2;
            newArr.push(num);
        } else if (num % 2 !== 0) {
            num *= 3;
            newArr.push(num);
        }
    }
    console.log(newArr);
    return newArr;
};

doubleTripleMap([1, 2, 3, 4]);
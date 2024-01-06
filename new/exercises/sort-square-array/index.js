// Write code to create a function that accepts an array of integers sorted in ascending (increasing) order and 
//returns a new array containing the squares of each number in ascending order

const sortedSquares = function(arr) {
    // can manually set up a new arr and push new vals in
    // or can use a map method passing a condition
    // or a loop 
    // the condition needs to match the current index of the array and then multiply it by itself
    // when new array is set up we can use the sort method for ascending order
 
    const results = arr.map(num => {
     return num * num;
    });
    //console.log(results);
    const sortedArr = results.sort((a,b) => a-b);
    console.log(sortedArr);
    return sortedArr;
 
 
 };
 
 sortedSquares([-7, -3, 2, 3, 11]);
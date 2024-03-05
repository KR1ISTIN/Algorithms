//Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. 
//The returned value should be a number.

function getIndexToIns(arr, num) {
    const findIndex = arr.concat(num) // add num to the array
    .sort(function(a, b){return a - b}) // now sort from ascending
    .indexOf(num); // now find the index of where the num is at
    console.log(findIndex)
    return findIndex;
  };
  
  getIndexToIns([40, 60, 5, 3, 2,100], 4);
  
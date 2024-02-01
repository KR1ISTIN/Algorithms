function frankenSplice(arr1, arr2, n) {
    console.log([4, ...arr1, 5, 6], arr2[n]); // this is what the result needs to look like
    
    const newArr = [];
    newArr.push(...arr2);
    newArr.splice(n, 0, ...arr1)
    // the first param represents the index at which you want to insert items
    // the second param indicates how many items to be deleted
    // the third param is the values to be added
    
    console.log(newArr)
    
    return newArr;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);

// You are given two arrays and an index.

// Copy each element of the first array into the second array, in order.

// Begin inserting elements at index n of the second array.

// Return the resulting array. The input arrays should remain the same after the function runs.
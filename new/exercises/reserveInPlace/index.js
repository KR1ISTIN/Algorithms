// Write code to return a new arr with all of the characters in arr reversed.
// You may NOT use the built-in reverse method

const reverseInPlace = (arr) => {
    let left = 0; // lets us set itital value to go up
    let right = arr.length - 1; // lets us be able to start at the last index so we can then count down
    //console.log(right)
  
    while (left < right) {
        console.log(left, right, 'l/r')
      const temp = arr[left];
      console.log(temp)
      arr[left] = arr[right]; // reassign to the highest value
      arr[right] = temp; // ressign the last value 
  
      left++; // count up to meet next condition 
      right--; // counting down the length
    }
  
    return console.log(arr);
  };
  reverseInPlace([1,3,4,2,5,7,8,])
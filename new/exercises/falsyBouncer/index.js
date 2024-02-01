//Remove all falsy values from an array. Return a new array; do not mutate the original array.//



// solution 1
function bouncer(arr) {
    const newArr = [];
  
    for (let i = 0; i < arr.length; i++) {
      const curr = arr[i]
  
      if(curr) {
        console.log(curr)
        newArr.push(curr)
      }
    }
  
    console.log(newArr)
  }
  
  //bouncer([7, "ate", "", false, 9]);

  function bouncer2(arr) {
    const newArr = arr.filter(Boolean);
    console.log(newArr);
    return newArr;
  }

  bouncer2([null, NaN, 1, 2, undefined])
  //filter method expects a function that returns a Boolean value which takes a single argument and returns true for truthy value or false for falsy value.
  // Hence we pass the built-in Boolean function.

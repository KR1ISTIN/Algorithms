//Given an array of integers, find the one that appears an odd number of times.
//here will always be only one integer that appears an odd number of times.

function findOdd(arr) {
    // create map so we can keep track of key and values
    const numCountMap = new Map();
    
    // setting up the map key and values
    for (let x of arr) {
        // if x is in the map, then update its count
      if(numCountMap.has(x)) {
        numCountMap.set(x, numCountMap.get(x) + 1)
      } else {
        // if not then we will set the key and value
        numCountMap.set(x, 1)
      }
    }
    console.log(numCountMap)

    // loop through the map 
    for (let [num, count] of numCountMap){
        if(count % 2 !== 0) {
            console.log(`The num with the odd occurance is ${num}`)
        }
    }
   
  }
  findOdd([5,1,4,3,2,1,5,4,3,2,10,10,11,2,2,2]);
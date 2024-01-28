//Return an array consisting of the largest number from each provided sub-array. 
//For simplicity, the provided array will contain exactly 4 sub-arrays.

function largestOfFour(arr) {
    const newArr = [];
  
    for(let i = 0; i < arr.length; i++) {
      console.log(arr[i][0], 'inital value')
      let starting = arr[i][0];
      // need to now start at index one since we are comparing index 0 from the first loop
      for(let x = 1; x < arr[i].length; x++) {
        //console.log(arr[i][x]);
        const curr = arr[i][x];
  
        if(starting < curr) {
          starting = curr
          // if the curr value is greater than the starting val after if loops through 
          //console.log(starting, 'starting')
        }
  
      }
      console.log(starting, 'biggest num')
      newArr.push(starting)
    }
    console.log(newArr)
    return newArr;
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1, 2000]]);
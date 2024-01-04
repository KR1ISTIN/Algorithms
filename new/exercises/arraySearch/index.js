// // Write code to create a function that accepts a two-dimensional array
// // Each 2D element contains either the string "X" or "O" (both capitalized)
// // Return the number of times "X" appears in the 2D array

// const arraySearch2D = function(arr) {
//     let countX = 0;
//     let countO = 0;

//     for(let i = 0; i < arr.length; i++) {
//         //console.log(arr[i]); // will log each value in the array
//         // now loop through each value's length and if x is less than the value
//         for(let x = 0; x < arr[i].length; x++ ) {
//             //console.log(x, arr[i][x]); // arr[i][x] is gaining access to the 2nd demsional array's value
            
//             // just wanted to try with 3d arr nest
//             for(let k = 0; k < arr[i][x].length; k++) {
//                 console.log(k, arr[i][x])
//                 if(arr[i][x] === 'X' || arr[i][x][k] === 'X') {
//                     countX++
//                 } else if( arr[i][x] === 'O' ||arr[i][x][k] === 'O' ) {
//                     countO++
//                 }
//             }
//         }
//     }
//     console.log(`CountX: ${countX}, CountO: ${countO}`)

// };
// arraySearch2D([1,2,3,['X','O'],4, ['X','X'],[['X','O']]]);

// // make a function that takes and array and a cb function as parameters to return a new array
// function myFunction(numArr, cb) {
//     const newArr = numArr.map(num => cb(num));
//     console.log(newArr);
//     return newArr;
// };
// myFunction([1,2,3], num => num * 2);

function filter_list(l) {
    // Return a new array with the strings filtered out
    let newArr = []; 
    
    for ( let x of l) {
      if(typeof  x === 'number') {
        console.log( x)
        newArr.push(x);
      }
    } 
   
    return console.log(newArr)
  }
  
  filter_list([1,'a','b',0,15])
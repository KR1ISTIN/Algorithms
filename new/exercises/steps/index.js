// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'



// iterate 0 through n (make row)
//make a empty str (stair)
//from 0 to n (make column)
// IF current column is = to or less than current row 
// then add "#" to the stair
//else
// add space to the stair 


function steps(n) {
    for (let row = 0; row < n; row ++) {
        // will create a empty string for every row that it iterated though to n
        let stair = ''; // empty string bc we need it to change 
        console.log('space')
        // loop through n starting at 0 to make a column
        // row processing loop 
        for(let column = 0; column < n; column++){
            if(column <= row) {
              
                stair += "#"
            } else {
                // add a space  everytime 
                stair += ' ';   
            }
        }

        console.log(stair)
    }
}

steps(5)
console.log('-------------------solution TWO----------------')
// solution two using recursion
// A function is recursive if it calls itself and reaches a stop condition.
// tips on recursion:
    // find out bare minimum pieces of info to represent problem
    // give a default to bare minimum
    // check the base and if no work then return 
    // or do some work and call function again but make sure to modify the arg 

// setting row to default 0 so we have a starting position
function stepsTwo (n, row=0, stair = '') {
    // stopping point
    if(n === row) {
        return;
    }
   
    if(n === stair.length) {
        console.log(stair);
        return stepsTwo(n, row +1);
    }

    if(stair.length <= row) {
        stair += '#'
    } else stair += ' ';
    
    stepsTwo(n, row, stair)

}
stepsTwo(3)


module.exports = steps;

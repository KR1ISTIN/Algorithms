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
        let stair = '.'; // empty string bc we need it to change 
        console.log(stair, 'space')
        // loop through n starting at 0 to make a column
        // row processing loop 
        for(let column = 0; column < n; column++){
            if(column <= row) {
                console.log( row, 'rrrr')
                stair += "#"
            } else {
                // add a space  everytime 
                console.log(column, 'col')
                stair += ' ';            }
        }

        console.log(stair)
    }
}

steps(5)

module.exports = steps;

// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    const results = [];

    // n will result in creating x amount of subarrays
    for (let i = 0; i < n; i++) {
        results.push([])
    }

    // going to keep track of what number we are trying to push into our array results
    let counter = 1;
    let startColumn = 0;
    let endColumn = n -1
    let startRow = 0;
    let endRow = n -1;

    while (startColumn <= endColumn && startRow <= endRow) {
        // top row
        for (let i = startColumn; i <= endColumn; i++) {
            results[startRow][i] = counter;
            counter++
        }
        startRow++
    }
}   

module.exports = matrix;

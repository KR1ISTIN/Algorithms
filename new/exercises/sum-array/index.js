// Write code to add all the numbers in `arr` and return the total

const sumArray = function(arr) {
    // set an inital value
    // the value needs to be able to change
    // loop through the array
    // add the initial value and then update the value by adding the next value in the array
    // return result 
    let result = 0;

    for( let num of arr){
        console.log(num, 'num')
        result += num 
    }
    console.log(result)
    return result
};
const arr = [4, 8, 15, 16, 23, 42];
sumArray(arr)

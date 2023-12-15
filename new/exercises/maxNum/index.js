// Write code to return the largest number in the given array

// going to need to a variable to keep track of the max
    // start the varible with the first positon of the array, 
    // in the case below the inital state will be 1
// going to need a loop
// loop through the array
// need to keep track of current value that is being passed
// that value needs to compared to previous values that were assign to max 
// if the current value of the index is greater than the previous assigned value, THEN reassign max
// ** side note** max is going to get reassign multi times and always compare it to the next current value in the loop array 
// dont forget to return 

var maxNum = function(arr) {
    let max = arr[0]; // keeps track max number

    for (let i = 0; i < arr.length; i++) {
        let current = arr[i]; // keeps track of current value
        // is 2 > 1 (this is an example of what the second iteration expression would look like )
        if( current > max ) {
            max = current // reassigning max to whatever the current array index value is, now when it loops 
            //through again the new current index value will be compared to the the previous value that it was assign to 
            console.log(current, 'current value' );
        }
        console.log(max, 'max temp');
    }
    console.log(`${max} is max number`);
    return max;

};
maxNum([1,2,30,100]);
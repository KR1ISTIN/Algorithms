// Write code to return the largest number in the given array

var maxNum = function(arr) {
    let max = arr[0]; // keeps track max number

    for (let i = 0; i < arr.length; i++) {
        let current = arr[i]; // keeps track of current value
        // is 2 > 1 (this is an example of what the second iteration expression would look like )
        if( current > max ) {
            max = current // reassigning max to whatever the current array index value is, now when it loops 
            //through again the new current index value will be compared to the the previous value that it was assign to 
            console.log(current, 'current value' )
        }
        console.log(max, 'max temp')
    }

    console.log(`${max} is max number`)

};
maxNum([1,2,30,100]);
// Write code to print all numbers from `num` down to 1
// You may assume `num` will be a positive number

const countdown = function(num) {
    // to print all numbers will need a loop
    // varaible will need to be set to num
    // need to count down Until we get to one 
    for(let i = num; i > 0; i--) {
        console.log(i)
    }
};
countdown(10)
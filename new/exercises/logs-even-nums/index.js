const logEvenNums = function(num) {
    // print ALL EVEN numbers
    // will need % to determine if a num is even
    // need a variable to start at 0 and work up until num
    // a loop could be used to loop 0 to num
    // a if statement to check if num is even
    // then if so print num 

    for (let i = 0; i <= num; i++) {
        if(i % 2 === 0) {
            console.log(i);  
        } 
    }
};
logEvenNums(10)
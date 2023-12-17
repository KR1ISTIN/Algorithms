// Write code to create a function that returns the factorial of `num`
// Return the factorial of the provided integer.
// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

// A function is recursive if it calls itself and reaches a stop condition.
// tips on recursion:
    // find out bare minimum pieces of info to represent problem
    // give a default to bare minimum
    // check the base and if no work then return 
    // or do some work and call function again but make sure to modify the arg 

    var factorial = function(num) {

        //let result equal starting value of num
        let result = num; 
    
        // if num is equal to 0 or 1 return 1
        if(num === 0 || num === 1) {
            console.log('0 or 1')
            return 1
        }
        // if num is greater than 1, run function, reminder result is still equal to 5 to start off
        // 1st loop: 5 > 1, num -1 (which is what num-- is), then: 5 * 4, result is now 20
        // 2nd loop: 4 > 1, num-- (3), 20 * 3, result:60
        // 3rd loop: 3 > 1, num-- (2), 60 * 2, result: 120
        // 4rth loop: 2 > 1, num-- (1), 120 * 1, result: 120
        while (num > 1) {
            num--;
            console.log(`num:${num}, result:${result}`);
            result = result * num;
            console.log(result, num, '------------');
        }
        console.log(result, 'result');
        return result;
    
    };
    
    factorial(5);
// Write a function to take a string and return true if it contains valid sets of matching brackets, else return false

const validBrackets = function(str) {
    const arr = []; // use to keep track of current bracket

    for(let i = 0; i < str.length; i++) {
        let char = str[i];
        console.log(char)

        if( char === '{' || char === '[' || char === '(') {
            arr.push(char);
            console.log(arr)
            continue
        };

        if(char === '}') {
            console.log(arr, char)
            const x = arr.pop(); // alters array 
            console.log(x , 'pop off element');
            if(x !== '{') { // if x does NOT equal this
                return false
            };
            continue
        };

        if(char === ']') {
            console.log(arr)
            if(arr.pop() !== '[') {
                return false
            };
            continue
        };

        if(char === ')') {
            if(arr.pop() !== '(') {
                return false
            };
            continue
        };
    };

    return  arr.length === 0

};

//validBrackets('{ } [ ( ) ]');

// --------------- solution Two ------------

function isValidBrackets(input) {
    const stack = [];

    for (let char of input) {
        console.log(char)
        if (char === '(' || char === '[' || char === '{') {
            // If it's an opening bracket, push it onto the stack
            stack.push(char);
            console.log(stack)
        } else if (char === ')' && stack.pop() !== '(') { 
            // Check for a matching '(' for ')'
            return false;
        } else if (char === ']' && stack.pop() !== '[') {
            // Check for a matching '[' for ']'
            return false;
        } else if (char === '}' && stack.pop() !== '{') {
            // Check for a matching '{' for '}'
            return false;
        }
    }

    // If the stack is empty, all brackets had matching pairs
    return stack.length === 0;
}

const example1 = "{[()]}";
const example2 = "{[(])}";

//console.log(isValidBrackets(example1)); // Output: true
//console.log(isValidBrackets(example2)); // Output: false

// ----------- solution Three ---------------

const validBracketsThree = function(str) {
    const arr = [];
    const bracketMap = {
        '(':')',
        '[':']',
        '{':'}'
    };

    for(let char of str) {
        console.log('------char:', char)
        if(bracketMap[char]) { // checking to see if its in the map key and if true then push to array 
            console.log(bracketMap[char], '.....')
            arr.push(char);
            //console.log(arr);
        } else {
            let x = arr.pop();
            console.log(x, 'pop');
            console.log(bracketMap[x], 'checking value in map'); // results true if so 

            if(char !== bracketMap[x]) {
                return false;
            };

        };  
    };
    return arr.length === 0;
};

const ex = "{[()]}";
const ex2 = "{{{]";

console.log(validBracketsThree(ex)); // Output: true
//console.log(validBracketsThree(ex2)); // Output: false


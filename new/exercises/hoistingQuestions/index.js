// due to hoisting, function declarations and variables are hoisted to the top of their scope
// therefore foo and x are hoisted to the global scope

// function x is hoisted to the top of the foo function. however anything after a return state will not get ran
// but since it was function declaratio, it gets hoisted to the top of foo 

var x = 1; // x is defined and declared and initialized step 1

function foo() {
    // this comment is showing function x(){} will get hoisted here on this line which is the top of its scope, 
    // so it would read like this: function x(){}
    x = 10; // since function x was hoisted to the top now we are modifying function x to 10 instead of var x the global variable
    return;
    function x() {};
    
}
foo(); // now foo is called

console.log(x); // will print 1 since we techincally have not modified the global scope var x


// another example showing how function c is being reassigned due to hoisting
var a = 1;

function foo2() {
    // function c gets hoisted here
    c = 5; // modifying function c to a interger 5 instead of a function
    console.log(c); // this is why it logs 5 
    return;
    function c(){
        console.log('hello world!!',a)
    }
}

foo2();
console.log(a);

// --------------IF YOU WANT TO MODIFY THE GLOBAL VARIABLE EXAMPLE BELOW---------------
var z = 1;
function foo3() {
    z = 7; // Modifies the global variable x
    return;
}
foo3();
console.log(z);
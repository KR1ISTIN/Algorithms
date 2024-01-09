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


// ----------- Hoisting example 3
var name = 'john joe';
(function() {
    console.log(name);
    var name = 'peter piper';
    //console.log(name); // if you try to log it now peter piper will print out since name has now been initialized 
})();

console.log(name); // john joe will be printed due to the global scope not being effected 

// bc this invokes the function immedietly the global name 'john joe' gets hoisted to global as well as IIFE
// then like 52 gets name gets declare to the top of the function but NOT initalized yet, therefore undefined will be printed


// ----------TESTING INHERITANCE-------
function Parent(){}; // CREATING A PARENT CLASS
function Child(){}; // CREATING A CHILD CLASS
Child.prototype = new Parent(); // BASICALLY LINKING THE CHILD PROTOYPE TO THE PARENT PROTOTYPE
var obj = new Child(); // WHICH IS NOW CREATING A NEW INSTANCE OF THE CHILD WHICH IS LINKED TO THE PARENT AND HAS ACCESS TO METHODS OR PROPERTIES
console.log(obj instanceof Parent); // EVALS TO TRUE SINCE THEY ARE LINKED
console.log(Child.prototype); // parent class
// Write code to create a function that accepts two arrays of numbers
// Return a new array containing the intersecting elements of the arrays

//returns a new array that is the intersection of both arrays.
// An **array intersection** in this activity is defined as the set of same-number pairs between both arrays.
// There might be multiple pairs of the same number between both arrays, so a number might appear more than one time in the result.


const arrayIntersection = function(arr1, arr2) {
    const arr1Map = new Map();
    const arr2Map = new Map();
    const results = [];

    // setting keys and values 
    for (let num of arr1) {
        if(!arr1Map.has(num)) {
            arr1Map.set(num, 1)
        } else {
            const val = arr1Map.get(num);
            //console.log(val)
            arr1Map.set(num, val + 1)
        }
    };
    for (let num of arr2) {
        if(!arr2Map.has(num)) {
            arr2Map.set(num, 1)
        } else {
            const val = arr2Map.get(num);
            //console.log(val)
            arr2Map.set(num, val + 1)
        }
    }
    //console.log(arr1Map, arr2Map);

    // eval for key and val equality 
    for(const [key,val] of arr1Map.entries()) {
        console.log(key,val, '...........')
        for(const [k,v] of arr2Map.entries()) {
            console.log(k,v,'????', key, val)
            if(k === key && v === val) {
                console.log(k,v);
                //Array(v).fill(key) creates an array of length v where each element is set to the value key
                // spread operator to spread out into result
                results.push(...Array(v).fill(k));
            }
        }
    }
    console.log(results);
    return results;

};
arrayIntersection([1,1,2,2,3,3], [1,1,2,2,3,4]);
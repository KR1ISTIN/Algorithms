function confirmEnding(str, target) {
    const ending = target.length;

    if( ending === 1) {
      const split = str.split('').slice(- ending).join('');
      
      const result = split === target ? true : false;
      console.log(result);
     
      return result;
    } else if (ending > 1) {
      const split = str.split('').slice(- ending).join('');
     console.log(split, ':ending in str', ' the target:', target);
     
      const result = split === target ? true : false;
      console.log(result);

      return result;
    };

};

confirmEnding("Congratulation", "on");
confirmEnding("Open sesame", "sage");

// solution two 

function confirmEnd2 (str, target) {
    // str is a iterable so we technically dont need to force it to be an array
    const result = str.slice(-target.length) === target;
    console.log(result);

    return result
}
confirmEnd2("Congratulation", "on");
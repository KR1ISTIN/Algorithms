function confirmEnding(str, target) {
    const ending = target.length;
    console.log(ending);

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
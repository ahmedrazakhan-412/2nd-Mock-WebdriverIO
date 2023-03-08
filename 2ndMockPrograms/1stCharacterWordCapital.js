/* 7) Take a sentence and make the 1st character of the word capital.
---------------------------------------------------------------------*/
function capitalizeWords(str) {
    return str
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase()+word.slice(1))
      .join(' ');
  }
  
  console.log(capitalizeWords('wELCOME to coding beauty')); 
/* 10) Separate all the specail character, numbers, characters present in string.
-----------------------------------------------------------------------------------*/
function seperateAll(arr) {
    
    var Characters="";
    var Numbers ="";
    var SpecailCharacters ="";

		for (let index = 0; index < arr.length; index++) {
      if(arr[index]>="A" && arr[index]<="Z" || arr[index]>="a" && arr[index]<="z") {
        Characters = Characters +arr[index];
      }
      else if(arr[index]>=0 && arr[index]<=9) {
        Numbers = Numbers+arr[index];
      }
      else{
        SpecailCharacters = SpecailCharacters+arr[index];
      }
    }
    console.log("The Characters are :"+Characters );
    console.log("The Numbers are : "+Numbers);
    console.log("The SpecailCharacters are : "+SpecailCharacters);
  }
    seperateAll("Te@s!55*tYa524n*#!Tr2545a"); 

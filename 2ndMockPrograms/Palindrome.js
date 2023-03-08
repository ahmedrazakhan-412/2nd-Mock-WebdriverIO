/* 3) JavaScript to check if the number is palindrome or not.
-----------------------------------------------------------*/
function palindromeFun ( num )  { 
var reveArrVal = "";
var number = String(num); 
var array = number.split(''); 
for (let index = array.length-1; index >= 0; index--) {
     reveArrVal = reveArrVal+array[index];
    }
  
if (number == reveArrVal)  
{  
 console.log(number+' It is a Palindrome Number ');   
}  
else {  
 console.log(number+' It is not a Palindrome Number' );  
}  
}  
 
const num = 545;  
palindromeFun(num);  
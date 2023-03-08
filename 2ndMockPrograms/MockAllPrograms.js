/********2nd Mock JavaScripts Program's***********
-------------------------------------------------

1) Sorting of an array and get the Max and Min Value.
2) Occurance of elements of an array.
3) Palindrome.
4) Prime number for the range of (50-80).
5) Get the count of vowels and consonants present in the string.
6) Check the number is divisible by 3.
7) Take a sentence and make the 1st character of the word capital.
8) Fibonacii series.
9) Reverse a String.
10) Separate all the specail character, numbers, characters present in string.

Note : Take the all inputs as dynamic.


1) Sorting of an array and get the Max and Min Value.
-----------------------------------------------------*/
function Sorting(arr) {
for (let i = 0; i < arr.length-1; i++) {
for (let j = 0 ; j < arr.length-1; j++) {
if(arr[j]> arr[j+1]) {
let temp = arr[j];
arr[j] = arr[j+1];
arr[j+1] = temp;
  }
 }
}

 process.stdout.write("Sorted an array[ ");
for (let i = 0; i < arr.length; i++) {
process.stdout.write(arr[i]+" ");
 }
console.log(" ]");
console.log("Maximum  --->  "+arr[arr.length-1]);
console.log("Minimum --->  "+arr[0]);
}
let arr1 = [3, 2 , 5, 7, 1, 4, 9, 6];
Sorting(arr1);



/* 2) Occurance of elements of an array.
----------------------------------------*/
function Occurance(arr) {
for (let i = 0; i < arr.length; i++) {
let count =0;
for (let j = 0; j < arr.length; j++) {
if(arr[i]==arr[j]) {
if(j<i) {
break;
}
count++;
}
}
if(count>=1) {
console.log(arr[i]+"---> "+count);
    }
   }	
}
let arr2 = [1, 2 , 5, 4, 1, 4, 4];
Occurance(arr2);

/* 3) JavaScript to check if the number is palindrome or not.
--------------------------------------------------------------*/
function palindromeFun ( num )  { 
  
const string = String(num); 

const arrValue = string.split(''); 

const reveArrVal = arrValue.reverse();   

const revString = reveArrVal.join('');  
  
if (string == revString)  
{  
 console.log('It is a Palindrome string ');   
}  
else {  
 console.log(' It is not a Palindrome string' );  
}  
}  
 
const num = 545;  
palindromeFun(num);  

/* 4) Prime number for the range of (50-80).
--------------------------------------------*/
const array = [50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80]; 

function isPrime(num) {
  for (let start = 2; num > start; start++) {
    if (num % start == 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(array.filter(isPrime));

/* 5) Get the count of vowels and consonants present in the string.
-------------------------------------------------------------------*/
function CountVowelConsonant(st) {
var VowelCount = 0, 
ConsonantCount = 0;    
var str = st.toLowerCase();    
console.log("The Given String '"+str+"' ");  
console.log("Count of Vowel and Consonant : ");
for(var i = 0; i < str.length; i++) {    
if(str.charAt(i) == 'a' || str.charAt(i) == 'e' || str.charAt(i) == 'i' || str.charAt(i) == 'o' || str.charAt(i) == 'u') {    
				VowelCount++;    
			}    
			else {      
				ConsonantCount++;    
			}    
		}      
		console.log("Number of vowels: " + VowelCount);    
		console.log("Number of consonants: " + ConsonantCount);    
	}
CountVowelConsonant("testyantra");

/* 6) Check the number is divisible by 3.
-----------------------------------------*/
for(let i=1;i<=100;i++){
 if((i%3)==0){
    console.log(i+ " is multiple of 3");
}
else{
    console.log(i+" not a multiple of 3");
}
}


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

/* 8) Fibonacii series.
------------------------*/
var n1 = 0,  n2 = 1, next_num;  
var limit = 15 ;  
console.log( "Fibonacci Series: ");  
for (let i = 1; i <= limit; i++)  
{  
  process.stdout.write( +  n1+" ");   
    next_num = n1 + n2;  
    n1 = n2; 
    n2 = next_num;  
}  

/* 9) Reverse a String.
-----------------------*/
function ReverseString(ch) {
        console.log("Before : "+ch);
		process.stdout.write("After : ");
		for (var i = ch.length-1; i >=0 ; i--) {
			process.stdout.write(ch[i]);
		}
}
ReverseString("testyantra");


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

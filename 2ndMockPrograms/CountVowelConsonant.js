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
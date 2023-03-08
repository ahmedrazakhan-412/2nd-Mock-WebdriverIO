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
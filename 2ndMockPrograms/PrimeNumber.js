/* 4) Prime number for the range of (50-80).
--------------------------------------------*/
let count = 0;
for(let j=50;j<=80;j++){
	count=0;
	for(let i=1;i<=j;i++)
	{
	   if(j%i==0)
	   {
	        count++;        
	   }
	}
	if(count==2)
  process.stdout.write(j+"  ");     
	}
/* 2) Occurance of elements of an array.
-------------------------------------*/

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
    let arr1 = [1, 2 , 5, 4, 1, 4, 4];
    Occurance(arr1);
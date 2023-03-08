/* 1) Sorting of an array and get the Max and Min Value.
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

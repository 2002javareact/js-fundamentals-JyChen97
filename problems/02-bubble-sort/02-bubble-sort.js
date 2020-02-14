/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray) {
  let inOrder = false;
  for( let i = 0; i < numArray.length-1 && !inOrder; i++){
    inOrder = true;
      for ( let x = 0; x < numArray.length-i-1; x ++){
        if(numArray[x] > numArray[x+1]){
          inOrder = false;
          let temp = numArray[x];
          numArray[x] = numArray[x+1];
          numArray[x+1] = temp;
        }
      }
  }

  return numArray;
}